import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ id, className, type, ...props }, ref) => {
  return (
    <input
      id={id}
      value={value}
      name={name}
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
