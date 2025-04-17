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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-x-axis-layout py-8 md:py-y-axis-layout">
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
                  ? "border-[#C90D0D]"
                  : watched.firstName && "border-[#329F32]"
              )}
            />
            {errors.firstName && (
              <p className="text-sm text-[#C90D0D]">
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
                  ? "border-[#C90D0D]"
                  : watched.lastName && "border-[#329F32]"
              )}
            />
            {errors.lastName && (
              <p className="text-sm text-[#C90D0D]">
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
                  ? "border-[#C90D0D]"
                  : watched.email && "border-[#329F32]"
              )}
            />
            {errors.email && (
              <p className="text-sm text-[#C90D0D]">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Input
              placeholder="Numer telefonu"
              {...register("phone")}
              className={cn(
                errors.phone
                  ? "border-[#C90D0D]"
                  : watched.phone && "border-[#329F32]"
              )}
            />
            {errors.phone && (
              <p className="text-sm text-[#C90D0D]">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <Textarea
              placeholder="Twoja wiadomość"
              className={cn(
                "h-[200px]",
                errors.message
                  ? "border-[#C90D0D]"
                  : watched.message && "border-[#329F32]"
              )}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-[#C90D0D]">{errors.message.message}</p>
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
                      ? "border-[#C90D0D]"
                      : field.value && "border-[#329F32]"
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
            <p className="text-sm text-[#C90D0D] md:col-span-2">
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

      <div className="hidden md:flex h-[300px] md:h-auto bg-[url('/FormImage.png')] bg-center bg-cover rounded-md" />
    </section>
  );
};
