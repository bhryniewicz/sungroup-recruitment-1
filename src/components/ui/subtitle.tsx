import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const subtitleVariants = cva("text-sm tracking-wider font-medium", {
  variants: {
    variant: {
      primary: "text-primary-dark",
      secondary: "text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface SubtitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof subtitleVariants> {
  children: React.ReactNode;
}

function Subtitle({ className, variant, children, ...props }: SubtitleProps) {
  return (
    <h2
      data-slot="subtitle"
      className={cn(subtitleVariants({ variant, className }))}
      {...props}
    >
      {children}
    </h2>
  );
}

export { Subtitle, subtitleVariants };
