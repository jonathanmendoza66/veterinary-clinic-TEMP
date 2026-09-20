import { Section } from "@/components/section";
import { DoctorCard } from "@/components/doctor-card";
import { TEAM, SUPPORT_TEAM } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TeamPage() {
  const { lang } = useI18n();
  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "हमारी टीम" : "Our team"}
        title={lang === "hi" ? "तीन वेटरिनेरियन। एक साझा सोच।" : "Three veterinarians. One shared philosophy."}
        lead={lang === "hi" ? "हर डॉक्टर के पास एक विशेष क्षेत्र है — पर सब एक ही गर्मजोशी से जुड़े हैं।" : "Each doctor has a specialism — but the same warmth holds them together."}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {TEAM.map((d) => <DoctorCard key={d.slug} doctor={d} />)}
        </div>
      </Section>

      <Section
        eyebrow={lang === "hi" ? "सपोर्ट टीम" : "Support team"}
        title={lang === "hi" ? "वो लोग जिनके बिना दिन नहीं चलता" : "The people the day depends on"}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {SUPPORT_TEAM.map((m) => (
            <Card key={m.name} className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img src={m.photo} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <CardContent className="space-y-1 p-4">
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role[lang]}</div>
                <Badge variant="outline" className="rounded-full">{m.years} {lang === "hi" ? "वर्ष अनुभव" : "yrs experience"}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={lang === "hi" ? "एक दिन" : "A day at"}
        title={lang === "hi" ? "वर्डेंट पॉज़ का एक दिन" : "A day at Verdant Paws"}
      >
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {["/gallery-puppy-vaccine.webp", "/gallery-cat-consult.webp", "/gallery-lab.webp", "/gallery-recovery.webp", "/gallery-lounge.webp", "/gallery-dental.webp", "/gallery-surgery-prep.webp", "/gallery-rescue.webp"].map((src) => (
            <div key={src} className="aspect-square overflow-hidden rounded-2xl">
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
