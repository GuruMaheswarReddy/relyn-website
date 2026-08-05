import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site";

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
        isDark ? "text-white" : "text-ink",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <span
        aria-hidden
        className={cn(
          "relative grid h-9 w-9 place-items-center overflow-hidden rounded-md transition-colors duration-300",
          isDark ? "bg-white text-ink" : "bg-ink text-white",
        )}
      >
        <span
          className={cn(
            "absolute inset-0",
            isDark
              ? "bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.35),transparent_55%)]"
              : "bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.55),transparent_55%)]",
          )}
        />
        <span className="relative font-display text-sm font-semibold tracking-tight">
          A
        </span>
      </span>
      {showWordmark ? (
        <span className="font-display text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </span>
      ) : null}
    </Link>
  );
}
