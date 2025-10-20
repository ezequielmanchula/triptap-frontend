import * as z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("El nombre es obligatorio")
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(30, "El nombre no puede tener más de 30 caracteres")
      .regex(new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]+$"), "El nombre solo puede contener letras y espacios"),


    lastName: z
      .string()
      .nonempty("El apellido es obligatorio")
      .min(2, "El apellido debe tener al menos 2 caracteres")
      .max(30, "El apellido no puede tener más de 30 caracteres")
      .regex(new RegExp("^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]+$"), "El apellido solo puede contener letras y espacios"),


    email: z.string().email("Correo inválido"),
    phone: z
      .string()
      .nonempty("El número de celular es obligatorio")
      // Acepta formato con +, espacios y dígitos
      .regex(
        new RegExp("^\\+?\\d{6,15}$"),
        "El número de celular debe contener solo números y puede incluir el prefijo +"
      )
      .min(8, "El número es demasiado corto")
      .max(16, "El número es demasiado largo"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Ambas contraseñas deben coincidir",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;