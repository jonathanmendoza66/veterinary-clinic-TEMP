import { cn } from "@/lib/utils";

export function BrandMark({ className, withWordmark = false }: { className?: string; withWordmark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4c-2.5 4 0 7 0 7s2.5-3 0-7z" fill="currentColor" stroke="none" />
          <circle cx="9" cy="11" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="23" cy="11" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="6" cy="17" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="26" cy="17" r="1.8" fill="currentColor" stroke="none" />
          <path d="M9 24c0-4 3-6 7-6s7 2 7 6c0 2-2 3-4 3-1 0-2-1-3-1s-2 1-3 1c-2 0-4-1-4-3z" fill="currentColor" stroke="none" />
        </svg>
      </span>
      {withWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight leading-none">
          Verdant <span className="text-primary">Paws</span>
        </span>
      )}
    </div>
  );
}
