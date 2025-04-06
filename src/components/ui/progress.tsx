import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  type = "default",
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  type: "default" | "danger";
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={`${
          type === "danger" ? "bg-pokered" : "bg-pokegreen"
        } h-full w-full flex-1 transition-all`}
        style={{
          transform: `translateX(-${(100 - (value ?? 0)).toString()}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
