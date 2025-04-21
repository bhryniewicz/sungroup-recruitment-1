import { Controller, FieldErrors, Control } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FormData } from "../schema";

interface FormTextareaProps {
  name: "message";
  label: string;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

export const FormTextarea = ({
  name,
  label,
  control,
  errors,
}: FormTextareaProps) => {
  return (
    <div className="flex flex-col gap-2 md:col-span-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Textarea
            label={label}
            {...field}
            className={cn(
              "h-[200px]",
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
