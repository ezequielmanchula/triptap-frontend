"use client";

import Image from "next/image";
import regis from "@/assets/images/register.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/schemas/registerSchema";
import FormInput from "../../components/common/FormInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Button from "@/app/components/common/Button";
import { authService } from "@/services/authService";



export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await authService.register({
        email: data.email,
        password: data.password,
        name: data.name,          // si el backend espera "name" separado
        lastName: data.lastName,  // ahora sí lo mandamos
        phone: data.phone         // y también el teléfono
      });
      router.push("/login");
    } catch (error: any) {
      alert(error.response?.data?.message || "Error al registrar usuario");
    }
  };


  return (
    <div className="min-h-screen flex flex-col justify-center md:flex-row bg-white container mx-auto">
      {/* Imagen visible solo en pantallas medianas o más grandes */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src={regis}
          alt="Interior de un micro"
          priority
          fill
          className="object-cover rounded-2xl "
        />
      </div>

      {/* Formulario */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-10 md:p-8 lg:p-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6">
          {/* Logo */}
          <Image 
            src="/images/Logo.png" 
            alt="Logo" 
            priority 
            width={100}
            height={100} 
            className="w-32 sm:w-40" />

          {/* Título y texto */}
          <div>
            <h2 className="Rubik text-3xl font-medium text-[#171717] text-start">Creá tu cuenta en Triptap</h2>
            <p className="Noto text-base font-normal text-[#333333] mb-4">Registrate gratis para reservar tus pasajes de manera rápida y llevar el control de todos tus viajes desde un solo lugar.</p>
          </div>

          {/* Inputs */}
          <FormInput
            label="Nombre"
            type="text"
            placeholder="John"
            {...register("name")}
            error={errors.name?.message}
          />

          <FormInput
            label="Apellido"
            type="text"
            placeholder="Doe"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
          <FormInput
            label="Teléfono"
            type="tel"
            placeholder="+54 9 11 1234 5678"
            {...register("phone")}
            error={errors.phone?.message}
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="email@email.com"
            {...register("email")}
            error={errors.email?.message}
          />

          <FormInput
            label="Contraseña"
            type="password"
            placeholder="********"
            {...register("password")}
            error={errors.password?.message}
          />

          <FormInput
            label="Confirmar contraseña"
            type="password"
            placeholder="********"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          
          <Button
            type="submit"
            isSubmitting={isSubmitting}
            label="Registrarme"
            loadingLabel="Registrando..."
            icon={<FaArrowRight />}
          />

          <div className="flex items-center my-2">
            <span className="flex-grow h-px bg-[#757575]" />
            <span className="Noto font-normal mx-2 text-sm text-[#757575]">Registrarme con</span>
            <span className="flex-grow h-px bg-[#757575]" />
          </div>

          {/* Botones sociales */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="Noto text-sm w-full border border-[#D9D9D9] rounded-lg py-2 flex items-center justify-center gap-2 font-medium text-[#171717] cursor-pointer">
              <span><ImGoogle3 color="#333333" size={24}/></span> Registrarme con Google
            </button>
            <button
              type="button"
              className="Noto text-sm w-full border border-[#D9D9D9] rounded-lg py-2 flex items-center justify-center gap-2 font-medium text-[#171717] cursor-pointer">
              <span><FaFacebook color="#333333" size={24}/></span> Registrarme con Facebook
            </button>
          </div>

          {/* Login */}
          <p className="Noto font-normal text-[#333333] text-sm mt-4 text-center">
            ¿Ya tenés una cuenta?{" "}
            <Link href="/login" className="font-semibold">
              Iniciar sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
