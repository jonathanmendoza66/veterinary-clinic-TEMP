import { Section, Reveal } from "@/components/section";
import { TestimonialCard } from "@/components/testimonial-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { TESTIMONIALS } from "@/lib/content";
import { Star, Quote } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function TestimonialsPage() {
  const { lang } = useI18n();
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);
  const avgRating = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "कहानियाँ" : "Stories"}
        title={lang === "hi" ? "जो हमारे पैरेंट्स कहते हैं" : "What our pet parents say"}
        lead={lang === "hi" ? "असली अनुभव, असली शब्द — हमारे काम का सबसे ईमानदार आईना।" : "Real visits, real words — the truest mirror of our work."}
      >
        <div className="mb-8 grid gap-3 md:grid-cols-3">
          {[
            { v: avgRating, l: { en: "Average rating", hi: "औसत रेटिंग" }, icon: <Star className="size-4 fill-current" /> },
            { v: "8,400+", l: { en: "Pets cared for", hi: "देखे गए पालतू" } },
            { v: "87%", l: { en: "Repeat visits", hi: "बार-बार आते हैं" } },
          ].map((s) => (
            <Card key={s.l.en}>
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-coral/10 text-coral">{s.icon ?? <Quote className="size-5" />}</div>
                <div>
                  <div className="font-display text-2xl font-semibold tabular-nums">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l[lang]}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden bg-leaf text-leaf-foreground">
          <CardContent className="flex flex-col gap-4 p-8 md:p-12">
            <Quote className="size-10 opacity-60" />
            <p className="font-display text-xl leading-relaxed md:text-3xl">{featured.quote[lang]}</p>
            <div className="mt-2 flex items-center gap-1 opacity-90">
              {Array.from({ length: featured.rating }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <div className="text-sm opacity-90">— {featured.name}, {featured.pet[lang]}</div>
          </CardContent>
        </Card>
      </Section>

      <Section eyebrow={lang === "hi" ? "और भी" : "More stories"} title={lang === "hi" ? "और भी पैरेंट्स" : "More from the community"}>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {rest.map((t) => (
            <Reveal key={t.name}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 text-center ring-1 ring-border">
          <Badge variant="secondary" className="rounded-full">{lang === "hi" ? "अपनी कहानी साझा करें" : "Share your story"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">{lang === "hi" ? "क्या आप पॉज़िटिव अनुभव सुनाना चाहेंगे?" : "Want to share a positive visit?"}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{lang === "hi" ? "हम आभारी रहेंगे — कुछ शब्द कई पैरेंट्स की मदद करते हैं।" : "We'd be grateful — a few words help other pet parents choose with confidence."}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton message={lang === "hi" ? "नमस्ते, मैं अपना अनुभव साझा करना चाहूंगा/चाहूंगी।" : "Hi, I'd like to share my visit experience."} label={lang === "hi" ? "अनुभव शेयर करें" : "Share my experience"} />
          </div>
        </div>
      </Section>
    </div>
  );
}
