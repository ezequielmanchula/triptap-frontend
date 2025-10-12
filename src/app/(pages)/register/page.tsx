"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormInput from "../../components/common/FormInput";
import Link from "next/link";

// Esquema de validación con Zod
const schema = z
  .object({
    nombre: z.string().min(2, "El nombre es obligatorio"),
    apellido: z.string().min(2, "El apellido es obligatorio"),
    email: z.string().email("Correo inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmarPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmarPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmarPassword"], // muestra el error debajo del campo correcto
  });

type RegisterFormData = z.infer<typeof schema>;

export default function RegisterForm() {
  // Inicializamos el formulario
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
  });

  // Simulación del envío (sin backend aún)
  const onSubmit = async (data: RegisterFormData) => {
    console.log("Datos del formulario:", data);
    await new Promise((res) => setTimeout(res, 1000));
    alert("✅ Simulación: usuario registrado correctamente");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Registro
        </h2>

        {/* Campos del formulario */}
        <FormInput
          label="Nombre"
          type="text"
          placeholder="Juan"
          {...register("nombre")}
          error={errors.nombre?.message}
        />

        <FormInput
          label="Apellido"
          type="text"
          placeholder="Pérez"
          {...register("apellido")}
          error={errors.apellido?.message}
        />

        <FormInput
          label="Email"
          type="email"
          placeholder="tu@email.com"
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
          {...register("confirmarPassword")}
          error={errors.confirmarPassword?.message}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-blue-400 hover:text-blue-300">
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
}
