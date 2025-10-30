"use client";

import { Suspense } from "react";
import Image from "next/image";
import loginImg from "@/assets/images/login.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/schemas/loginSchema";
import FormInput from "../../components/common/FormInput";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ImGoogle3 } from "react-icons/im";
import { FaArrowRight, FaFacebook } from "react-icons/fa";
import Button from "@/app/components/common/Button";
import { authService } from "@/services/authService";
import { useAuth } from "@app/context/AuthContext";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await authService.login(data.email, data.password);
      login(response.access_token);

      // 👇 leemos el redirect de la URL
      const redirect = searchParams.get("redirect");

      // Si había un viaje pendiente lo guardamos igual
      const pendingTrip = localStorage.getItem("pendingTrip");
      if (pendingTrip) {
        localStorage.setItem("selectedTrip", pendingTrip);
        localStorage.removeItem("pendingTrip");
      }

      // Redirigimos según corresponda
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/reservations");
      }
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "response" in error) {
        const err = error as { response?: { data?: { message?: string } } };
        alert(err.response?.data?.message || "Error al iniciar sesión");
      } else {
        alert("Error desconocido al iniciar sesión");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center md:flex-row bg-white container mx-auto">
      {/* Imagen lateral */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src={loginImg}
          alt="Personas subiendo a un micro"
          priority
          fill
          className="w-auto h-auto object-cover rounded-2xl"
        />
      </div>

      {/* Formulario */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-10 md:p-8 lg:p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            priority
            width={100}
            height={100}
            className="w-32 sm:w-40"
          />

          <div>
            <h2 className="Rubik text-3xl font-medium text-[#171717] text-start">
              Iniciar sesión
            </h2>
            <p className="Noto text-base font-normal text-[#333333] mb-4">
              Iniciá sesión para gestionar tus reservas, ver tus viajes y acceder a tus pasajes digitales en cualquier momento.
            </p>
          </div>

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

          <Button
            type="submit"
            isSubmitting={isSubmitting}
            label="Ingresar"
            loadingLabel="Iniciando sesión..."
            icon={<FaArrowRight />}
          />

          <div className="flex items-center my-2">
            <span className="flex-grow h-px bg-[#757575]" />
            <span className="Noto font-normal mx-2 text-sm text-[#757575]">
              Ingresar con
            </span>
            <span className="flex-grow h-px bg-[#757575]" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="Noto text-sm w-full border border-[#D9D9D9] rounded-lg py-2 flex items-center justify-center gap-2 font-medium text-[#171717] cursor-pointer"
            >
              <ImGoogle3 color="#333333" size={24} /> Ingresar con Google
            </button>
            <button
              type="button"
              className="Noto text-sm w-full border border-[#D9D9D9] rounded-lg py-2 flex items-center justify-center gap-2 font-medium text-[#171717] cursor-pointer"
            >
              <FaFacebook color="#333333" size={24} /> Ingresar con Facebook
            </button>
          </div>

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

// 👇 Exportamos la página envuelta en Suspense
export default function Page() {
  return (
    <Suspense fallback={<div>Cargando login...</div>}>
      <LoginForm />
    </Suspense>
  );
}
