import { Controller, FieldErrors, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormData } from "../schema";

interface FormInputProps {
  name: "firstName" | "lastName" | "email" | "phone";
  label: string;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  type?: string;
}

export const FormInput = ({
  name,
  label,
  control,
  errors,
  type = "text",
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label={label}
            type={type}
            hasError={!!errors[name]}
            className={cn(
              errors[name]
                ? "border-error-message"
                : field.value && "border-filled-input"
            )}
          />
        )}
      />
      {errors[name] && (
        <p className="text-sm text-error-message">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
