import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().trim().min(1, "Imię jest wymagane"),
  lastName: z.string().trim().min(1, "Nazwisko jest wymagane"),
  email: z.string().trim().email("Nieprawidłowy adres e-mail"),
  phone: z
    .string()
    .min(9, "Numer telefonu musi mieć dokładnie 9 cyfr")
    .max(9, "Numer telefonu musi mieć dokładnie 9 cyfr")
    .regex(/^\d{9}$/, "Numer telefonu musi składać się tylko z 9 cyfr"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Musisz zaakceptować regulamin",
  }),
});

export type FormData = z.infer<typeof formSchema>;
