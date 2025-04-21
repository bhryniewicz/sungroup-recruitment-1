"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Title } from "../ui/title";
import { formSchema, FormData } from "./schema";
import { FormInput } from "./FormInput";
import { FormCheckbox } from "./FormCheckbox";
import { FormTextarea } from "./FormTextarea";

export const Form = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      phone: "",
      terms: false,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };

  return (
    <section className="py-8 md:py-y-axis-layout">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1920px] mx-auto layout-x-padding">
        <div className="bg-primary-light p-8 md:p-12 rounded-lg">
          <Title size="md" className="pb-8">
            Napisz do nas
          </Title>

          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <FormInput
                name="firstName"
                label="Imię"
                control={control}
                errors={errors}
              />
              <FormInput
                name="lastName"
                label="Nazwisko"
                control={control}
                errors={errors}
              />
              <FormInput
                name="email"
                label="Adres e-mail"
                control={control}
                errors={errors}
              />
              <FormInput
                name="phone"
                label="Numer telefonu"
                control={control}
                errors={errors}
                type="number"
              />

              <div className="flex flex-col gap-2 md:col-span-2">
                <FormTextarea
                  name="message"
                  label="Twoja wiadomość"
                  control={control}
                  errors={errors}
                />
              </div>

              <FormCheckbox
                name="terms"
                control={control}
                errors={errors}
                label="Zapoznałem się z regulaminem i wyrażam zgodę na przetwarzanie moich danych osobowych przez Sungroup.pl"
              />

              <Button
                type="submit"
                size="sm"
                className="w-full md:col-start-2 md:col-end-3 mt-3 md:max-w-[210px] md:ml-auto"
              >
                Wyślij wiadomość
              </Button>
            </form>
          </FormProvider>
        </div>

        <div className="hidden lg:flex lg:h-auto bg-[url('/FormImage.png')] bg-center bg-cover rounded-lg" />
      </div>
    </section>
  );
};
