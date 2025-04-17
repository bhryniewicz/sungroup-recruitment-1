import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva("font-semibold ", {
  variants: {
    variant: {
      primary: "text-gray-dark",
      secondary: "text-white",
    },
    size: {
      sm: "text-xl md:text-2xl",
      md: "text-2xl md:text-3xl",
      lg: "text-[32px] md:text-[42px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  children: React.ReactNode;
}

function Title({ className, variant, size, children, ...props }: TitleProps) {
  return (
    <h1
      data-slot="title"
      className={cn(titleVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </h1>
  );
}

export { Title, titleVariants };
