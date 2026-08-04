import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-ink text-white shadow-[0_12px_30px_-18px_rgba(11,18,32,0.65)] hover:bg-ink-soft",
  secondary:
    "border border-ink/15 bg-white/55 text-ink backdrop-blur-md hover:bg-white/80",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  accent:
    "bg-accent text-accent-foreground shadow-[0_12px_30px_-16px_rgba(15,118,110,0.7)] hover:bg-accent-soft",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonAsButton>(
  function Button(
    {
      variant = "primary",
      size = "md",
      className,
      children,
      type = "button",
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses(variant, size, className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonAsLink) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses(variant, size, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      {children}
    </Link>
  );
}
