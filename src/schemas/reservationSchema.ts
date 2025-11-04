import { z } from 'zod';

export const passengerInfoSchema = z.object({
  nombre: z
  .string().min(1, "El nombre es requerido"),
  apellido: z
  .string().min(1, "El apellido es requerido"),
  email: z
  .string().email("Email inválido"),
  telefono: z
  .string().min(1, "El teléfono es requerido"),
});

export const reservationSchema = z.object({
  passengerInfo: passengerInfoSchema,
  selectedSeats: z
  .array(z.string()).min(1, "Debe seleccionar al menos un asiento"),
  paymentMethod: z
  .string().min(1, "Debe seleccionar un método de pago"),
});

export type PassengerInfo = z.infer<typeof passengerInfoSchema>;
export type ReservationData = z.infer<typeof reservationSchema>;