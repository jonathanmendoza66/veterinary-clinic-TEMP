import { Section, Reveal } from "@/components/section";
import { PlanCard } from "@/components/plan-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useI18n, formatINR } from "@/lib/i18n";
import { PLANS, FAQS } from "@/lib/content";
import { Check, Sparkles, ShieldCheck, Calendar, BadgePercent } from "lucide-react";
import { Link } from "react-router-dom";

export function PlansPage() {
  const { lang, t } = useI18n();
  const compareRows = [
    { en: "Wellness exams per year", hi: "वार्षिक वेलनेस जांच", values: ["2", "3", "4"] },
    { en: "Annual blood screening", hi: "वार्षिक ब्लड स्क्रीनिंग", values: ["—", "Yes", "Yes"] },
    { en: "Senior screening package", hi: "सीनियर स्क्रीनिंग पैकेज", values: ["—", "—", "Yes"] },
    { en: "Diagnostic discount", hi: "डायग्नोस्टिक छूट", values: ["10%", "15%", "20%"] },
    { en: "Priority scheduling", hi: "प्राथमिकता शेड्यूलिंग", values: ["—", "Yes", "Yes"] },
    { en: "Nutrition consultation", hi: "न्यूट्रिशन कंसल्टेशन", values: ["—", "—", "Yes"] },
    { en: "Vaccination reminders", hi: "वैक्सीनेशन रिमाइंडर", values: ["Yes", "Yes", "Yes"] },
  ];

  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "वेलनेस प्लान्स" : "Wellness plans"}
        title={lang === "hi" ? "एक फीस। पूरा साल। पूर्वानुमेय देखभाल।" : "One fee. A whole year. Predictable care."}
        lead={lang === "hi" ? "हमारे प्लान्स बजट को व्यवस्थित रखते हैं और रूटीन देखभाल को आसान बनाते हैं — साथ ही असली बचत देते हैं।" : "Our plans keep budgeting tidy, routine care effortless and savings real."}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => <PlanCard key={p.slug} plan={p} />)}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "तुलना" : "Compare"} title={lang === "hi" ? "सब कुछ एक जगह पर" : "Everything in one view"}>
        <div className="overflow-x-auto rounded-3xl border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="p-4 text-left font-medium">{lang === "hi" ? "विशेषता" : "Feature"}</th>
                {PLANS.map((p) => (
                  <th key={p.slug} className="p-4 text-left">
                    <div className="font-display text-base font-semibold">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{formatINR(p.price)}/yr</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 font-medium">{lang === "hi" ? r.hi : r.en}</td>
                  {r.values.map((v, j) => (
                    <td key={j} className="p-4 text-muted-foreground">
                      {v === "Yes" ? <Check className="size-4 text-leaf" /> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "क्यों जुड़ें" : "Why join"} title={lang === "hi" ? "एक प्लान, बहुत-सी छोटी ख़ुशियाँ" : "A plan, many small reliefs"}>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { icon: Calendar, t: { en: "Predictable budgeting", hi: "बजट का अंदाज़ा" }, b: { en: "Pay once, plan the rest of the year.", hi: "एक बार भुगतान करें, बाकी साल आराम।" } },
            { icon: BadgePercent, t: { en: "Real diagnostic savings", hi: "असली डायग्नोस्टिक बचत" }, b: { en: "Up to 20% off in-house lab and imaging.", hi: "इन-हाउस लैब व इमेजिंग पर 20% तक छूट।" } },
            { icon: ShieldCheck, t: { en: "Catches issues earlier", hi: "जल्दी पकड़े जाते हैं मुद्दे" }, b: { en: "Multiple exams a year mean fewer surprises.", hi: "साल में कई जांचें — कम चौंकाने वाली बातें।" } },
            { icon: Sparkles, t: { en: "Priority support", hi: "प्राथमिकता सहायता" }, b: { en: "Faster scheduling and replies on WhatsApp.", hi: "तेज़ शेड्यूलिंग और WhatsApp पर जल्दी जवाब।" } },
          ].map((f) => (
            <Reveal key={f.t.en}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{f.t[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{f.b[lang]}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "बचत का अंदाज़ा" : "Estimated savings"} title={lang === "hi" ? "PawPrime के साथ एक सामान्य साल" : "A typical PawPrime year"}>
        <Card>
          <CardContent className="grid gap-4 p-6 md:grid-cols-3">
            {[
              { label: { en: "Wellness exams (3)", hi: "वेलनेस जांच (3)" }, save: 700 },
              { label: { en: "Diagnostics discount", hi: "डायग्नोस्टिक्स छूट" }, save: 1200 },
              { label: { en: "Annual blood screening", hi: "वार्षिक ब्लड स्क्रीनिंग" }, save: 2200 },
            ].map((row) => (
              <div key={row.label.en} className="rounded-2xl border bg-secondary/30 p-4">
                <div className="text-xs text-muted-foreground">{row.label[lang]}</div>
                <div className="mt-1 font-display text-2xl font-semibold text-leaf">{formatINR(row.save)}</div>
              </div>
            ))}
            <div className="md:col-span-3 mt-2 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-leaf/10 p-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-leaf">{lang === "hi" ? "अनुमानित कुल बचत" : "Estimated total savings"}</div>
                <div className="font-display text-3xl font-semibold">{formatINR(4100)}+</div>
              </div>
              <WhatsAppButton message={lang === "hi" ? "नमस्ते, मैं PawPrime प्लान में जुड़ना चाहूंगा/चाहूंगी।" : "Hi, I'd like to enrol in the PawPrime plan."} label={lang === "hi" ? "PawPrime जॉइन करें" : "Join PawPrime"} />
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section eyebrow={lang === "hi" ? "अक्सर पूछे" : "FAQs"} title={lang === "hi" ? "प्लान्स के बारे में" : "About the plans"}>
        <Accordion type="single" collapsible className="rounded-2xl border bg-card">
          {FAQS.slice(0, 5).map((f, i) => (
            <AccordionItem key={i} value={`p${i}`} className="px-4">
              <AccordionTrigger className="text-left">{f.q[lang]}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a[lang]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-leaf p-8 text-center text-leaf-foreground md:p-12">
          <Badge variant="secondary" className="rounded-full">{lang === "hi" ? "तैयार हैं?" : "Ready?"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-4xl">
            {lang === "hi" ? "एक मैसेज से जॉइन करें।" : "Join in a single message."}
          </h3>
          <p className="mt-2 opacity-90">{lang === "hi" ? "WhatsApp पर लिखें, हम बाक़ी संभाल लेंगे।" : "Message us on WhatsApp, we'll handle the rest."}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton variant="secondary" />
            <Button asChild variant="outline" className="rounded-full bg-transparent text-leaf-foreground border-leaf-foreground/40 hover:bg-leaf-foreground/10 hover:text-leaf-foreground">
              <Link to="/pricing">{t("cta.fullPriceList")}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
