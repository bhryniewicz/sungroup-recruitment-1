import { Controller, Control, FieldErrors } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "../schema";
import { cn } from "@/lib/utils";

interface FormCheckboxProps {
  name: "terms";
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  label: string;
}

export const FormCheckbox = ({
  name,
  control,
  errors,
  label,
}: FormCheckboxProps) => {
  return (
    <div className="flex flex-col items-start gap-2 md:col-span-2">
      <div className="flex gap-2">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
              className={cn(
                errors[name]
                  ? "border-error-message"
                  : field.value && "border-filled-input"
              )}
            />
          )}
        />
        <label htmlFor={name} className="text-sm font-inter text-gray-dark">
          {label}
        </label>
      </div>
      {errors[name] && (
        <p className="text-sm text-error-message md:col-span-2">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
