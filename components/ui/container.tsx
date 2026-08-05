import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  narrow?: boolean;
};

export function Container({
  as: Comp = "div",
  className,
  children,
  narrow = false,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        narrow ? "max-w-4xl" : "max-w-[72rem]",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
