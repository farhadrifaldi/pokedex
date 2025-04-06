import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof spinnerVariants> {
  variant?: "gray" | "white";
}

const Spinner = ({
  className,
  size,
  variant = "gray",
  ...props
}: SpinnerProps) => {
  return (
    <div className="flex items-center font-semibold">
      <img
        src={
          variant === "white" ? "/pokeball-bg-white.png" : "/pokeball-bg.png"
        }
        alt="Loading..."
        className={spinnerVariants({ size, className })}
        {...props}
      />
      <span
        className={`ml-2 ${
          variant === "white" ? "text-white/50" : "text-[#bcbcbc]"
        }`}
      >
        Loading ...
      </span>
    </div>
  );
};
Spinner.displayName = "Spinner";

export { Spinner };
