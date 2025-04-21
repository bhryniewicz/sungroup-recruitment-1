import { forwardRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  hasError?: boolean;
  name: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, hasError = false, name, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasContent, setHasContent] = useState(
      Boolean(props.value || props.defaultValue)
    );
    const { watch } = useFormContext();
    const watchedValue = watch(name);

    const textareaId = id || name;

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setHasContent(
        props.value && typeof props.value === "string"
          ? props.value.length > 0
          : false
      );
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasContent(e.target.value.length > 0);
    };

    const handleBlurCapture = () => {
      if (!watchedValue || watchedValue.length === 0) {
        setIsFocused(false);
      }
    };

    return (
      <div className="relative w-full">
        <textarea
          id={textareaId}
          ref={ref}
          data-slot="textarea"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onBlurCapture={handleBlurCapture}
          className={cn(
            "peer border rounded-xs bg-white px-5 py-4 pt-5 h-24 w-full text-base shadow-xs outline-none transition-all font-inter",
            "border-input text-gray-dark placeholder:text-gray-light",
            "focus-visible:ring-ring/50 focus-visible:border-primary",
            "hover:border-gray/40",
            hasError && "border-error-message",
            hasContent && "border-filled-input",
            "peer-focus:border-primary",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "absolute left-5 px-1 bg-white text-base text-[#858993] transition-all z-10 pointer-events-auto cursor-text",
              isFocused || hasContent || hasError
                ? "top-0 -translate-y-1/2 text-xs bg-primary-light text-gray-dark"
                : "top-5"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
