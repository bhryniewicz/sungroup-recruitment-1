import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "Imię jest wymagane"),
  lastName: z.string().min(1, "Nazwisko jest wymagane"),
  email: z.string().email("Nieprawidłowy adres e-mail"),
  phone: z.string().min(1, "Numer telefonu jest wymagany"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Musisz zaakceptować regulamin",
  }),
});

export type FormData = z.infer<typeof formSchema>;
