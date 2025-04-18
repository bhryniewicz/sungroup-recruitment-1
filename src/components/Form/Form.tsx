"use client";

import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Title } from "../ui/title";
import { FormData, formSchema } from "./schema";

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
    console.log("✅ Submitted data:", data);
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
              <div className="flex flex-col gap-2">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      label="Imię"
                      {...field}
                      hasError={!!errors.firstName}
                      className={cn(
                        errors.firstName
                          ? "border-error-message"
                          : field.value && "border-filled-input"
                      )}
                    />
                  )}
                />
                {errors.firstName && (
                  <p className="text-sm text-error-message">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      label="Nazwisko"
                      {...field}
                      hasError={!!errors.lastName}
                      className={cn(
                        errors.lastName
                          ? "border-error-message"
                          : field.value && "border-filled-input"
                      )}
                    />
                  )}
                />
                {errors.lastName && (
                  <p className="text-sm text-error-message">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      label="Adres e-mail"
                      {...field}
                      hasError={!!errors.email}
                      className={cn(
                        errors.email
                          ? "border-error-message"
                          : field.value && "border-filled-input"
                      )}
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-error-message">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      label="Numer telefonu"
                      {...field}
                      hasError={!!errors.phone}
                      className={cn(
                        errors.phone
                          ? "border-error-message"
                          : field.value && "border-filled-input"
                      )}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-sm text-error-message">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      label="Twoja wiadomość"
                      className={cn(
                        "h-[200px]",
                        errors.message
                          ? "border-error-message"
                          : field.value && "border-filled-input"
                      )}
                      {...field}
                    />
                  )}
                />
                {errors.message && (
                  <p className="text-sm text-error-message">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-2 md:col-span-2">
                <Controller
                  name="terms"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className={cn(
                        errors.terms
                          ? "border-error-message"
                          : field.value && "border-filled-input"
                      )}
                    />
                  )}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-inter text-gray-dark"
                >
                  Zapoznałem się z regulaminem i wyrażam zgodę na przetwarzanie
                  moich danych osobowych przez Sungroup.pl
                </label>
              </div>

              {errors.terms && (
                <p className="text-sm text-error-message md:col-span-2">
                  {errors.terms.message}
                </p>
              )}

              <Button
                type="submit"
                size="sm"
                className="w-full md:col-start-2 md:col-end-3 mt-3"
              >
                Wyślij wiadomość
              </Button>
            </form>
          </FormProvider>
        </div>

        <div className="hidden lg:flex h-[300px] md:h-auto bg-[url('/FormImage.png')] bg-center bg-cover rounded-lg" />
      </div>
    </section>
  );
};
