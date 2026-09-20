import { Section, Reveal } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { CLINIC, VALUES, TEAM, SUPPORT_TEAM } from "@/lib/content";
import { Heart, Microscope, ScrollText, Users, ArrowRight, GraduationCap, Award, Building2, Sparkles, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const valueIcons = { heart: Heart, microscope: Microscope, "scroll-text": ScrollText, users: Users } as const;

export function AboutPage() {
  const { t, lang } = useI18n();
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-20">
          <Badge variant="secondary" className="rounded-full">{t("nav.about")}</Badge>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {lang === "hi"
              ? "एक मोहल्ले का क्लिनिक — आधुनिक ज़मीर के साथ।"
              : "A neighborhood clinic — with a modern conscience."}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {lang === "hi"
              ? "वर्डेंट पॉज़ की शुरुआत 2018 में इस यकीन के साथ हुई थी कि एनसीआर के पालतू माता-पिता को साक्ष्य-आधारित चिकित्सा भी चाहिए और गर्मजोशी भी। आज भी वही सोच हमारी टीम को गाइड करती है।"
              : `Verdant Paws opened in 2018 with the conviction that pet parents in the NCR deserved evidence-based medicine and genuine warmth — together. ${CLINIC.stats.pets.toLocaleString("en-IN")}+ patients later, the conviction has not budged.`}
          </p>
        </div>
      </section>

      {/* Stats inline */}
      <Section>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { icon: Building2, value: CLINIC.founded, label: lang === "hi" ? "स्थापना" : "Founded" },
            { icon: Award, value: CLINIC.registration, label: t("label.registration"), mono: true },
            { icon: MapPin, value: "Sector 49", label: lang === "hi" ? "क्लिनिक" : "Clinic" },
            { icon: Calendar, value: lang === "hi" ? "हर दिन" : "Open daily", label: lang === "hi" ? "खुले" : "Schedule" },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="flex items-start gap-3 p-4">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <div className={`font-semibold ${s.mono ? "font-mono text-xs" : ""}`}>{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section
        eyebrow={lang === "hi" ? "हमारी कहानी" : "Our story"}
        title={lang === "hi" ? "धीरे-धीरे, ध्यान से बना एक क्लिनिक" : "A clinic built slowly, on purpose"}
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-base text-muted-foreground">
            <p>
              {lang === "hi"
                ? "वर्डेंट पॉज़ का जन्म दिल्ली एनसीआर के कई लोकप्रिय क्लीनिकों में बिताए सालों के बाद हुआ — जहाँ एक सच लगातार उभरकर आया: पालतू माता-पिता को यह जानने की ज़रूरत होती है कि क्यों, सिर्फ़ क्या नहीं।"
                : "Verdant Paws was born after years across busy Delhi NCR practices, where one truth kept surfacing — pet parents needed to be told the why, not just the what."}
            </p>
            <p>
              {lang === "hi"
                ? "इसलिए हमने 2018 में सेक्टर 49 में दरवाज़े खोले — आधुनिक डायग्नोस्टिक्स, साफ़ अनुमान और कम-तनाव वाली क्लिनिकल देखभाल। आज वो छोटा सा क्लिनिक तीन वेटरिनेरियन और एक संगठित सपोर्ट टीम बन चुका है।"
                : "So we opened in Sector 49 in 2018 — with modern diagnostics, transparent estimates and low-stress clinical handling. The small clinic has since grown into three veterinarians and a coordinated support team."}
            </p>
            <p>
              {lang === "hi"
                ? "हम तेज़ी से बड़ा बनने की होड़ में नहीं हैं। हम बेहतर, गहरा और स्थानीय बनना चाहते हैं।"
                : "We are not racing to be the biggest. We are committed to being better, deeper and local."}
            </p>
          </div>
          <div className="relative">
            <img src="/clinic-exterior.webp" alt="Clinic" className="aspect-[4/5] w-full rounded-3xl object-cover" />
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-card p-4 shadow-lg ring-1 ring-border md:block">
              <div className="font-display text-3xl font-semibold">{CLINIC.stats.years}+</div>
              <div className="text-xs text-muted-foreground">{lang === "hi" ? "साल की देखभाल" : "years of care"}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section eyebrow={lang === "hi" ? "मूल्य" : "Core values"} title={lang === "hi" ? "हम जिस पर अडिग हैं" : "What we hold non-negotiable"}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => {
            const Icon = valueIcons[v.icon as keyof typeof valueIcons] ?? Heart;
            return (
              <Reveal key={v.title.en}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-3 p-5">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{v.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{v.body[lang]}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Timeline */}
      <Section eyebrow={lang === "hi" ? "मील के पत्थर" : "Milestones"} title={lang === "hi" ? "धीमे और स्थिर कदम" : "Slow, steady steps"}>
        <ol className="relative ml-3 border-l-2 border-leaf/30">
          {[
            { y: "2018", t: { en: "Doors open in Sector 49", hi: "सेक्टर 49 में दरवाज़े खुले" } },
            { y: "2020", t: { en: "In-house digital X-Ray installed", hi: "इन-हाउस Digital X-Ray लगा" } },
            { y: "2021", t: { en: "First Second Chance Saturday", hi: "पहला सेकंड चांस सैटरडे" } },
            { y: "2023", t: { en: "Expanded ultrasound and ECG suite", hi: "Ultrasound और ECG सूट का विस्तार" } },
            { y: "2024", t: { en: "PawPrime wellness plan launches", hi: "PawPrime वेलनेस प्लान लॉन्च" } },
            { y: "2026", t: { en: "8,400+ patients across NCR", hi: "एनसीआर में 8,400+ मरीज़" } },
          ].map((m, i) => (
            <li key={i} className="relative ml-6 pb-6">
              <span className="absolute -left-[34px] flex size-6 items-center justify-center rounded-full bg-leaf text-leaf-foreground text-[10px] font-bold ring-4 ring-background">{i + 1}</span>
              <div className="text-xs font-semibold uppercase tracking-wider text-leaf">{m.y}</div>
              <div className="mt-0.5 font-medium">{m.t[lang]}</div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Team strip */}
      <Section eyebrow={t("nav.team")} title={lang === "hi" ? "जिनसे आप क्लिनिक में मिलेंगे" : "Who you'll meet at the clinic"} action={<Button asChild variant="ghost" className="rounded-full"><Link to="/team">{t("cta.meetTeam")} <ArrowRight className="size-4" /></Link></Button>}>
        <div className="grid gap-4 md:grid-cols-3">
          {TEAM.map((d) => (
            <Card key={d.slug} className="overflow-hidden">
              <div className="flex">
                <img src={d.photo} alt={d.name} className="aspect-square w-24 shrink-0 object-cover md:w-28" />
                <CardContent className="flex flex-col gap-1 p-4">
                  <div className="font-semibold">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.role[lang]}</div>
                  <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground"><GraduationCap className="size-3" /> {d.education}</div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {SUPPORT_TEAM.map((m) => (
            <Card key={m.name}>
              <CardContent className="flex items-center gap-3 p-4">
                <img src={m.photo} alt={m.name} className="size-12 rounded-xl object-cover" />
                <div>
                  <div className="text-sm font-semibold">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.role[lang]}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section eyebrow={lang === "hi" ? "दर्शन" : "Philosophy"} title={lang === "hi" ? "जो चीज़ें हमारे लिए बहुत मायने रखती हैं" : "Things that matter quite a lot to us"}>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Sparkles, t: { en: "Low-stress handling", hi: "कम-तनाव वाली हैंडलिंग" }, b: { en: "Pets remember tone, not just procedures. Calm matters.", hi: "पालतू प्रक्रियाओं को नहीं, माहौल को याद रखते हैं। शांत रहना मायने रखता है।" } },
            { icon: ScrollText, t: { en: "Owner education", hi: "मालिक की शिक्षा" }, b: { en: "Decisions made together, in plain language.", hi: "सरल भाषा में, साथ मिलकर लिए गए निर्णय।" } },
            { icon: Heart, t: { en: "Individualised plans", hi: "व्यक्तिगत प्लान" }, b: { en: "We resist the average. Your pet is not a chart.", hi: "हम औसत से बचते हैं। आपका पालतू कोई चार्ट नहीं है।" } },
          ].map((p) => (
            <Card key={p.t.en}>
              <CardContent className="flex flex-col gap-3 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-coral/15 text-coral">
                  <p.icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{p.t[lang]}</h3>
                <p className="text-sm text-muted-foreground">{p.b[lang]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
