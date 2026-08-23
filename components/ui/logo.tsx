import Link from "next/link";
import { cn } from "@/lib/utils";

export function RelynLogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={cn("shrink-0", className)} viewBox="0 0 200 200" fill="none">
      <rect x="4" y="4" width="192" height="192" rx="42" fill="#133a2b" />
      <path
        d="M 46 148 L 46 96 L 100 48 L 154 96 L 154 148"
        fill="none"
        stroke="#faf7f1"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="80" y="112" width="16" height="16" rx="3" fill="#c08a3e" />
      <rect x="104" y="112" width="16" height="16" rx="3" fill="#c08a3e" />
      <rect x="80" y="136" width="16" height="16" rx="3" fill="#c08a3e" />
      <rect x="104" y="136" width="16" height="16" rx="3" fill="#c08a3e" />
    </svg>
  );
}

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
        "group inline-flex items-center gap-3.5 transition-[color,opacity] duration-300 hover:opacity-90",
        isDark ? "text-white" : "text-[#133a2b]",
        className
      )}
      aria-label="Relyn home"
    >
      <RelynLogoIcon className="w-10 h-10 shadow-xs" />

      {showWordmark && (
        <div className="flex flex-col justify-center">
          <span className="font-serif text-[24px] font-bold tracking-tight leading-none text-[#133a2b]">
            Relyn
          </span>
          <span className="text-[8.5px] font-bold uppercase tracking-[0.25em] text-[#c08a3e] mt-1">
            — TAKEN CARE OF. —
          </span>
        </div>
      )}
    </Link>
  );
}