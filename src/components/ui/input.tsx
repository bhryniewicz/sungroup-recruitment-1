import * as React from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  hasError?: boolean;
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", label, hasError = false, name, id, ...props },
    ref
  ) => {
    const { watch } = useFormContext();
    const watchedValue = watch(name);

    const [isFocused, setIsFocused] = React.useState(false);
    const [hasContent, setHasContent] = React.useState(false);

    const inputId = id || name;

    React.useEffect(() => {
      setHasContent(!!watchedValue && watchedValue.length > 0);
    }, [watchedValue]);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleBlurCapture = () => {
      if (!watchedValue || watchedValue.length === 0) {
        setIsFocused(false);
      }
    };

    return (
      <div className="relative w-full">
        <input
          id={inputId}
          ref={ref}
          type={type}
          data-slot="input"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onBlurCapture={handleBlurCapture}
          className={cn(
            "peer border bg-primary-light px-5 py-4 pt-5 h-11 w-full text-base shadow-xs outline-none transition-all font-inter",
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
            htmlFor={inputId}
            className={cn(
              "absolute left-5 px-1 bg-primary-light text-base text-[#858993] transition-all z-10 pointer-events-auto cursor-text",
              isFocused || hasContent
                ? "top-0 -translate-y-1/2 text-xs"
                : "top-1/2 -translate-y-1/2",
              hasError ? "text-error-message" : "text-gray text-sm"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
