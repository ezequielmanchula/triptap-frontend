"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormInput from "../../components/common/FormInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Esquema de validación con Zod
const schema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof schema>;

export default function LoginForm() {
  const router = useRouter();

  // Inicializamos el formulario
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });

  // Simulación del envío (sin backend aún)
  const onSubmit = async (data: LoginFormData) => {
    console.log("Intentando login con:", data);
    await new Promise((res) => setTimeout(res, 1000));

    // Simulamos token de prueba
    const fakeToken = "12345-fake-jwt";
    localStorage.setItem("token", fakeToken);

    alert("✅ Simulación: inicio de sesión exitoso");
    router.push("/reservations"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Iniciar sesión
        </h2>

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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 mt-4 bg-green-600 hover:bg-green-500 rounded-lg text-white font-semibold transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Ingresando..." : "Ingresar"}
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-blue-400 hover:text-blue-300">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
}
