import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { TEAM } from "@/lib/content";
import { whatsappLink } from "@/lib/links";
import { Button } from "@/components/ui/button";
import { MessageCircle, GraduationCap } from "lucide-react";

export function DoctorCard({ doctor }: { doctor: (typeof TEAM)[number] }) {
  const { lang, t } = useI18n();
  const message =
    lang === "hi"
      ? `नमस्ते, मैं ${doctor.name} के साथ अपॉइंटमेंट बुक करना चाहूंगा/चाहूंगी।`
      : `Hi, I'd like to book an appointment with ${doctor.name}.`;

  return (
    <Card className="tilt-card overflow-hidden border-border/70 transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        <img
          src={doctor.photo}
          alt={doctor.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{doctor.name}</h3>
            <p className="text-xs text-muted-foreground">{doctor.role[lang]}</p>
          </div>
          <Badge variant="secondary" className="rounded-full">
            {doctor.years} {t("label.experience")}
          </Badge>
        </div>
      </div>
      <CardContent className="flex flex-col gap-3 p-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{doctor.bio[lang]}</p>
        <div className="flex flex-wrap gap-1.5">
          {doctor.interests[lang].map((s) => (
            <Badge key={s} variant="outline" className="rounded-full text-[10px] font-medium">
              {s}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <GraduationCap className="size-3.5 shrink-0" />
          <span className="truncate">{doctor.education}</span>
        </div>
        <Button asChild size="sm" variant="outline" className="rounded-full">
          <a href={whatsappLink(message)} target="_blank" rel="noreferrer">
            <MessageCircle className="size-4" /> {t("cta.bookWith")}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function DoctorAvatarRow() {
  const { lang } = useI18n();
  return (
    <div className="flex -space-x-3">
      {TEAM.map((d) => (
        <Avatar key={d.slug} className="size-9 ring-2 ring-background">
          <AvatarImage src={d.photo} alt={d.name} />
          <AvatarFallback>{d.name.split(" ").slice(-1)[0][0]}</AvatarFallback>
        </Avatar>
      ))}
      <span className="sr-only">{lang === "hi" ? "टीम" : "team"}</span>
    </div>
  );
}
