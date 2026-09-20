import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useI18n, formatINR } from "@/lib/i18n";
import { SERVICES } from "@/lib/content";
import { Search, Receipt, ShieldCheck, Wallet } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const EXTRA_PRICES = [
  { en: "Anti-Rabies Vaccine", hi: "Anti-Rabies वैक्सीन", from: 600 },
  { en: "DHPPi Vaccine", hi: "DHPPi वैक्सीन", from: 850 },
  { en: "Kennel Cough Vaccine", hi: "Kennel Cough वैक्सीन", from: 950 },
  { en: "FVRCP Vaccine", hi: "FVRCP वैक्सीन", from: 950 },
  { en: "Deworming (per dose)", hi: "डीवर्मिंग (प्रति खुराक)", from: 350 },
  { en: "CBC Test", hi: "CBC टेस्ट", from: 700 },
  { en: "Biochemistry Profile", hi: "Biochemistry प्रोफ़ाइल", from: 1900 },
  { en: "Urinalysis", hi: "Urinalysis", from: 600 },
  { en: "Digital X-Ray (per view)", hi: "Digital X-Ray (प्रति व्यू)", from: 900 },
  { en: "Ultrasound", hi: "Ultrasound", from: 1800 },
  { en: "ECG", hi: "ECG", from: 1100 },
  { en: "Microchipping", hi: "माइक्रोचिपिंग", from: 1500 },
  { en: "Nail Trim", hi: "नेल ट्रिम", from: 300 },
  { en: "Anal Gland Expression", hi: "Anal Gland Expression", from: 450 },
  { en: "Ear Cleaning", hi: "कान की सफ़ाई", from: 400 },
] as const;

export function PricingPage() {
  const { lang } = useI18n();
  const [q, setQ] = useState("");

  const services = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return SERVICES;
    return SERVICES.filter((s) => `${s.name.en} ${s.name.hi}`.toLowerCase().includes(query));
  }, [q]);

  const extras = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return EXTRA_PRICES;
    return EXTRA_PRICES.filter((e) => `${e.en} ${e.hi}`.toLowerCase().includes(query));
  }, [q]);

  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "मूल्य" : "Pricing"}
        title={lang === "hi" ? "ईमानदार और पारदर्शी" : "Honest and transparent"}
        lead={lang === "hi" ? "हमारे शुरुआती मूल्य देखिए। विज़िट से पहले हम विस्तृत अनुमान देंगे।" : "Browse our starting prices. We'll share itemised estimates before any visit."}
      >
        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={lang === "hi" ? "सेवा खोजें" : "Search services or tests"} className="pl-9 rounded-full" />
          </div>
          <WhatsAppButton message={lang === "hi" ? "नमस्ते, मुझे एक विस्तृत अनुमान चाहिए।" : "Hi, I'd like a detailed cost estimate."} label={lang === "hi" ? "अनुमान मांगें" : "Ask for an estimate"} />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Receipt, t: { en: "Itemised estimates", hi: "विस्तृत अनुमान" } },
            { icon: ShieldCheck, t: { en: "No hidden charges", hi: "कोई छिपा हुआ शुल्क नहीं" } },
            { icon: Wallet, t: { en: "UPI, card, cash accepted", hi: "UPI, कार्ड, कैश स्वीकार" } },
          ].map((c) => (
            <Card key={c.t.en}>
              <CardContent className="flex items-center gap-3 p-4">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><c.icon className="size-5" /></span>
                <span className="text-sm font-medium">{c.t[lang]}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "सेवाएँ" : "Core services"} title={lang === "hi" ? "हमारी मुख्य सेवाएँ" : "Headline services"}>
        <div className="overflow-hidden rounded-3xl border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="p-4 text-left font-medium">{lang === "hi" ? "सेवा" : "Service"}</th>
                <th className="p-4 text-left font-medium">{lang === "hi" ? "विवरण" : "About"}</th>
                <th className="p-4 text-right font-medium">{lang === "hi" ? "शुरू" : "From"}</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.slug} className="border-t hover:bg-secondary/40">
                  <td className="p-4 font-medium">
                    <Link to={`/services/${s.slug}`} className="underline-offset-4 hover:underline">{s.name[lang]}</Link>
                  </td>
                  <td className="p-4 text-muted-foreground">{s.short[lang]}</td>
                  <td className="p-4 text-right tabular-nums font-semibold">{formatINR(s.price)}</td>
                </tr>
              ))}
              {services.length === 0 && (
                <tr><td colSpan={3} className="p-8 text-center text-muted-foreground">{lang === "hi" ? "कोई सेवा नहीं मिली" : "No services match"}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "और मूल्य" : "Other charges"} title={lang === "hi" ? "वैक्सीन, टेस्ट और छोटी प्रक्रियाएं" : "Vaccines, tests and small procedures"}>
        <div className="grid gap-3 md:grid-cols-2">
          {extras.map((e) => (
            <Card key={e.en} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center justify-between gap-3 p-4">
                <span className="text-sm font-medium">{e[lang]}</span>
                <Badge variant="outline" className="rounded-full tabular-nums">{formatINR(e.from)}+</Badge>
              </CardContent>
            </Card>
          ))}
          {extras.length === 0 && (
            <Card className="md:col-span-2"><CardContent className="p-8 text-center text-muted-foreground">{lang === "hi" ? "कोई परिणाम नहीं" : "No results"}</CardContent></Card>
          )}
        </div>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 text-center ring-1 ring-border">
          <Badge variant="secondary" className="rounded-full">{lang === "hi" ? "बजट सहायता" : "Budget assistance"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {lang === "hi" ? "बड़े उपचार के लिए विकल्प मौजूद हैं" : "Options exist for bigger treatments"}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "hi" ? "रेस्क्यू पालतुओं के लिए छूट और चयनित उपचार के लिए चरणबद्ध भुगतान — हमसे पूछें।" : "Discounted rescue care and phased payments on selected treatments — please ask."}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton message={lang === "hi" ? "नमस्ते, मुझे एक विस्तृत अनुमान चाहिए।" : "Hi, I'd like a detailed cost estimate."} />
            <Button asChild variant="outline" className="rounded-full"><Link to="/plans">{lang === "hi" ? "वेलनेस प्लान्स देखें" : "See wellness plans"}</Link></Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
