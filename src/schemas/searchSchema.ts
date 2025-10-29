import * as z from "zod";

export const searchSchema = z.object({
  origin: z
    .string()
    .nonempty("El origen es obligatorio"),

  destination: z
    .string()
    .nonempty("El destino es obligatorio"),

  date: z
    .string()
    .nonempty("La fecha es obligatoria")
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Debe ser una fecha válida",
    }),
}).refine(
  (data) => data.origin !== data.destination,
  { message: "El origen y el destino no pueden ser iguales", path: ["destination"] }
);

export type SearchFormData = z.infer<typeof searchSchema>;
