import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useI18n, formatINR } from "@/lib/i18n";
import { SERVICES } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: (typeof SERVICES)[number]; className?: string }) {
  const { lang, t } = useI18n();
  return (
    <Link to={`/services/${service.slug}`} className={cn("group block h-full", className)}>
      <Card className="h-full overflow-hidden border-border/60 bg-card transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={service.image}
            alt={service.name[lang]}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-1.5 p-4 pb-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base tracking-tight leading-snug">
              {service.name[lang]}
            </h3>
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {service.short[lang]}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {t("label.startingAt")}{" "}
            <span className="font-semibold tabular-nums text-foreground">{formatINR(service.price)}</span>
          </p>
        </div>
      </Card>
    </Link>
  );
}
