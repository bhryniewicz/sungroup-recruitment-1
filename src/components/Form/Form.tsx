"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Title } from "../ui/title";
import { FormData, formSchema } from "./schema";

export const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const watched = watch();

  const onSubmit = (data: FormData) => {
    console.log("✅ Submitted data:", data);
  };

  return (
    <section className="py-8 md:py-y-axis-layout">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1920px] mx-auto layout-x-padding">
        <div className="bg-primary-light p-8 md:p-12 rounded-md">
          <Title size="md" className="pb-8">
            Napisz do nas
          </Title>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Imię"
                {...register("firstName")}
                className={cn(
                  errors.firstName
                    ? "border-error-message"
                    : watched.firstName && "border-filled-input"
                )}
              />
              {errors.firstName && (
                <p className="text-sm text-error-message">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Input
                placeholder="Nazwisko"
                {...register("lastName")}
                className={cn(
                  errors.lastName
                    ? "border-error-message"
                    : watched.lastName && "border-filled-input"
                )}
              />
              {errors.lastName && (
                <p className="text-sm text-error-message">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Input
                placeholder="Adres e-mail"
                {...register("email")}
                className={cn(
                  errors.email
                    ? "border-error-message"
                    : watched.email && "border-filled-input"
                )}
              />
              {errors.email && (
                <p className="text-sm text-error-message">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Input
                placeholder="Numer telefonu"
                {...register("phone")}
                className={cn(
                  errors.phone
                    ? "border-error-message"
                    : watched.phone && "border-filled-input"
                )}
              />
              {errors.phone && (
                <p className="text-sm text-error-message">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <Textarea
                placeholder="Twoja wiadomość"
                className={cn(
                  "h-[200px]",
                  errors.message
                    ? "border-error-message"
                    : watched.message && "border-filled-input"
                )}
                {...register("message")}
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
              <label className="text-sm font-inter text-gray-dark">
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
              className="w-full md:col-start-2 md:col-end-3"
            >
              Wyślij wiadomość
            </Button>
          </form>
        </div>

        <div className="hidden lg:flex h-[300px] md:h-auto bg-[url('/FormImage.png')] bg-center bg-cover rounded-md" />
      </div>
    </section>
  );
};
