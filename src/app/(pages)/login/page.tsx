"use client";

import Image from "next/image";
import login from "@/assets/images/login.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/schemas/loginSchema";
import FormInput from "../../components/common/FormInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";



export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Intentando login con:", data);
    await new Promise((res) => setTimeout(res, 1000));

    const fakeToken = "12345-fake-jwt";
    localStorage.setItem("token", fakeToken);

    alert("✅ Simulación: inicio de sesión exitoso");
    router.push("/reservations");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center md:flex-row bg-white container mx-auto">
      {/* Imagen visible solo en pantallas medianas o más grandes */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src={login}
          alt="Personas subiendo a un micro"
          priority
          fill
          className="w-auto h-auto object-cover rounded-2xl"
        />
      </div>

      {/* Formulario */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-10 md:p-8 lg:p-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
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
            <h2 className="Rubik text-3xl font-medium text-[#171717] text-start">
              Iniciar sesión
            </h2>
            <p className="Noto text-base font-normal text-[#333333] mb-4">
              Iniciá sesión para gestionar tus reservas, ver tus viajes y acceder a tus pasajes digitales en cualquier momento.
            </p>
          </div>

          {/* Inputs */}
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

          <div className="flex justify-end text-sm text-[#333333] font-medium cursor-pointer">
            <span>¿Olvidaste tu contraseña?</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 mt-2 bg-[#ED7A1C] hover:bg-[#d96a13] rounded-lg text-white font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? "Ingresando..." : "Ingresar"}
          </button>

          <div className="flex items-center my-2">
            <span className="flex-grow h-px bg-[#757575]" />
            <span className="Noto font-normal mx-2 text-sm text-[#757575]">Ingresar con</span>
            <span className="flex-grow h-px bg-[#757575]" />
          </div>

          {/* Botones sociales */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="Noto text-sm w-full border border-[#D9D9D9] rounded-lg py-2 flex items-center justify-center gap-2 font-medium text-[#171717] cursor-pointer">
              <span><ImGoogle3 color="#333333" size={24}/></span> Ingresar con Google
            </button>
            <button
              type="button"
              className="Noto text-sm w-full border border-[#D9D9D9] rounded-lg py-2 flex items-center justify-center gap-2 font-medium text-[#171717] cursor-pointer">
              <span><FaFacebook color="#333333" size={24}/></span> Ingresar con Facebook
            </button>
          </div>

          {/* Registro */}
          <p className="Noto font-normal text-[#333333] text-sm mt-4 text-center">
            ¿Todavía no tenés una cuenta?{" "}
            <Link href="/register" className="font-semibold">
              Regístrate ahora
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
