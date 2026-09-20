import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n, formatINR } from "@/lib/i18n";
import { PLANS } from "@/lib/content";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlanCard({ plan }: { plan: (typeof PLANS)[number] }) {
  const { lang, t } = useI18n();
  const popular = (plan as { popular?: boolean }).popular;
  return (
    <Card
      className={cn(
        "tilt-card relative h-full overflow-hidden border-border/70 transition-shadow hover:shadow-xl",
        popular && "border-leaf/40 bg-gradient-to-b from-leaf/5 to-transparent"
      )}
    >
      {popular && (
        <Badge className="absolute right-4 top-4 rounded-full gap-1 bg-leaf text-leaf-foreground hover:bg-leaf">
          <Sparkles className="size-3" /> {t("label.popular")}
        </Badge>
      )}
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">{plan.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{plan.tagline[lang]}</p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-4xl font-semibold tabular-nums">{formatINR(plan.price)}</span>
          <span className="text-sm text-muted-foreground">/year</span>
        </div>
        <ul className="space-y-2.5 text-sm">
          {plan.features[lang].map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-leaf">
                <Check className="size-3" />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="mt-auto rounded-full" variant={popular ? "default" : "outline"}>
          <Link to="/plans">
            {plan.name} <ArrowRight className="size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
