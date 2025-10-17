import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("El correo es obligatorio")
    .email("Ingrese un correo válido"),
  password: z
    .string()
    .nonempty("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;