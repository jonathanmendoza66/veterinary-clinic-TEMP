import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useI18n } from "@/lib/i18n";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  pet: { en: string; hi: string };
  quote: { en: string; hi: string };
  rating: number;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { lang } = useI18n();
  const initials = testimonial.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <Card className="h-full border-border/70 bg-card transition-shadow hover:shadow-md">
      <CardContent className="flex h-full flex-col gap-4 p-5">
        <div className="flex items-center gap-1 text-coral">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-foreground/90">&ldquo;{testimonial.quote[lang]}&rdquo;</p>
        <div className="mt-auto flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarFallback className="bg-leaf/10 text-leaf font-semibold">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-semibold">{testimonial.name}</div>
            <div className="text-xs text-muted-foreground">{testimonial.pet[lang]}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
