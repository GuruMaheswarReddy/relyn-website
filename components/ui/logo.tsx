import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  tone?: "light" | "dark";
};

export function Logo({
  className,
  showWordmark = true,
  tone = "light",
}: LogoProps) {
  const isDark = tone === "dark";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 transition-[color,opacity] duration-300 hover:opacity-90",
        isDark ? "text-white" : "text-[#021B30]",
        className
      )}
      aria-label="Relyn home"
    >
      {/* Logo Icon */}
      <span
        aria-hidden
        className={cn(
          "relative grid h-9 w-9 place-items-center overflow-hidden rounded-full transition-colors duration-300",
          isDark
            ? "bg-white text-[#021B30]"
            : "bg-[#021B30] text-white"
        )}
      >
        <span
          className={cn(
            "absolute inset-0",
            isDark
              ? "bg-[radial-gradient(circle_at_30%_20%,rgba(2,27,48,0.25),transparent_55%)]"
              : "bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]"
          )}
        />

        <span className="relative font-display text-sm font-semibold tracking-tight">
          R
        </span>
      </span>

      {/* Relyn Wordmark */}
      {showWordmark ? (
        <span className="font-display text-xl font-semibold tracking-tight">
          relyn
        </span>
      ) : null}
    </Link>
  );
}