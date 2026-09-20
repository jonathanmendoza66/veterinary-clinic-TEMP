import { Section, Reveal } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { COMMUNITY } from "@/lib/content";
import { Heart, Users, HandHeart, GraduationCap, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/whatsapp-button";

const ICONS = [HandHeart, GraduationCap, Heart];

export function CommunityPage() {
  const { lang } = useI18n();
  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "समुदाय" : "Community"}
        title={lang === "hi" ? "क्लिनिक की दीवारों के परे देखभाल" : "Care that reaches beyond clinic walls"}
        lead={lang === "hi" ? "हम मानते हैं कि एक स्वस्थ शहर तभी बनता है जब हर पालतू को सम्मान मिले।" : "We believe a healthier city only happens when every pet is treated with dignity."}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {COMMUNITY.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={c.slug}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="flex h-full flex-col gap-3 p-6">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-coral/15 text-coral"><Icon className="size-6" /></span>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{c.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{c.blurb[lang]}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "साझेदारियाँ" : "Partnerships"} title={lang === "hi" ? "जिनके साथ हम काम करते हैं" : "Who we work alongside"}>
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { en: "Friendicoes SECA", hi: "Friendicoes SECA" },
            { en: "Posh Foundation", hi: "Posh Foundation" },
            { en: "House of Stray Animals", hi: "House of Stray Animals" },
            { en: "All Creatures Great & Small", hi: "All Creatures Great & Small" },
          ].map((p) => (
            <Card key={p.en}>
              <CardContent className="flex items-center gap-3 p-4">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><Users className="size-5" /></span>
                <span className="text-sm font-medium">{p[lang]}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "इस महीने" : "This month"} title={lang === "hi" ? "आने वाले कार्यक्रम" : "Upcoming events"}>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { d: "Jul 13", t: { en: "Second Chance Saturday", hi: "सेकंड चांस सैटरडे" }, b: { en: "Free wellness checks for rescued pets, 10am–1pm.", hi: "रेस्क्यू पालतुओं के लिए मुफ़्त वेलनेस चेक, सुबह 10–1।" } },
            { d: "Jul 27", t: { en: "First-time Parent Workshop", hi: "पहली बार के पैरेंट वर्कशॉप" }, b: { en: "Evening session at the clinic, 6:30pm–8pm.", hi: "क्लिनिक में शाम का सत्र, 6:30–8 बजे।" } },
          ].map((e) => (
            <Card key={e.d}>
              <CardContent className="flex items-start gap-4 p-5">
                <div className="rounded-2xl bg-leaf text-leaf-foreground p-3 text-center">
                  <div className="text-[10px] uppercase tracking-wider">{e.d.split(" ")[0]}</div>
                  <div className="font-display text-2xl font-semibold leading-none">{e.d.split(" ")[1]}</div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{e.t[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{e.b[lang]}</p>
                  <Button asChild variant="outline" size="sm" className="mt-2 rounded-full"><a href="#" onClick={(ev) => ev.preventDefault()}><Calendar className="size-3" /> {lang === "hi" ? "RSVP करें" : "RSVP"}</a></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-coral/10 p-8 text-center ring-1 ring-coral/20">
          <Badge className="rounded-full bg-coral text-coral-foreground hover:bg-coral">{lang === "hi" ? "जुड़ें" : "Get involved"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">{lang === "hi" ? "क्या आप एक रेस्क्यू समूह चलाते हैं?" : "Run a rescue group?"}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{lang === "hi" ? "हम साझेदारी की संभावनाओं को सुनना चाहेंगे।" : "We'd love to hear about partnership possibilities."}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton message={lang === "hi" ? "नमस्ते, मैं एक रेस्क्यू समूह से हूँ — साझेदारी पर बात करना चाहूंगा/चाहूंगी।" : "Hi, I'm from a rescue group and would like to discuss a partnership."} label={lang === "hi" ? "हमसे बात करें" : "Talk to us"} />
            <Button asChild variant="outline" className="rounded-full"><Link to="/contact">{lang === "hi" ? "संपर्क पेज" : "Contact page"} <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
