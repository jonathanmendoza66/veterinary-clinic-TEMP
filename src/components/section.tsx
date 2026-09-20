import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Comp>
  );
}

export function Section({
  children,
  className,
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  action,
}: {
  children?: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-4 py-12 md:py-20", className)}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || lead) && (
          <header
            className={cn(
              "mb-8 flex flex-col gap-3 md:mb-12",
              align === "center" && "items-center text-center",
              action && "md:flex-row md:items-end md:justify-between md:gap-6"
            )}
          >
            <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
              {eyebrow && (
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-leaf/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-leaf">
                  {eyebrow}
                </div>
              )}
              {title && (
                <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
              {lead && <p className="mt-3 text-base text-muted-foreground md:text-lg">{lead}</p>}
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
