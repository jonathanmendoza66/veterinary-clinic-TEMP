import { useMemo, useState } from "react";
import { Section } from "@/components/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { FAQS } from "@/lib/content";
import { Search, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/content";
import { telLink } from "@/lib/links";

export function FAQPage() {
  const { lang } = useI18n();
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return FAQS;
    return FAQS.filter((f) => `${f.q.en} ${f.q.hi} ${f.a.en} ${f.a.hi}`.toLowerCase().includes(query));
  }, [q]);

  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "सवाल-जवाब" : "Frequently asked"}
        title={lang === "hi" ? "ज़्यादातर सवालों के जवाब यहाँ हैं" : "Most answers live right here"}
        lead={lang === "hi" ? "अगर आपका सवाल नीचे नहीं है, बेझिझक WhatsApp पर लिखें।" : "If your question isn't covered, please ping us on WhatsApp."}
      >
        <div className="mb-6 max-w-md">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={lang === "hi" ? "सवाल खोजें" : "Search FAQs"} className="pl-9 rounded-full" />
          </div>
        </div>

        <Accordion type="single" collapsible className="rounded-2xl border bg-card">
          {filtered.map((f, i) => (
            <AccordionItem key={i} value={`q${i}`} className="px-4">
              <AccordionTrigger className="text-left font-medium">{f.q[lang]}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a[lang]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filtered.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed p-8 text-center text-muted-foreground">{lang === "hi" ? "कोई जवाब नहीं मिला।" : "No answer matches."}</div>
        )}
      </Section>

      <Section eyebrow={lang === "hi" ? "विषय" : "Browse by topic"} title={lang === "hi" ? "और जानकारी" : "More to explore"}>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: { en: "First visit", hi: "पहली विज़िट" }, b: { en: "What to bring, how long it takes, and what to expect.", hi: "क्या लाएं, कितना समय लगेगा, क्या उम्मीद करें।" } },
            { t: { en: "Vaccinations", hi: "वैक्सीनेशन" }, b: { en: "Schedules for puppies, kittens and adults.", hi: "पिल्लों, बच्चों व वयस्कों के लिए शेड्यूल।" } },
            { t: { en: "Surgery prep", hi: "सर्जरी की तैयारी" }, b: { en: "Fasting, medications and recovery basics.", hi: "उपवास, दवाएं और रिकवरी।" } },
            { t: { en: "Wellness plans", hi: "वेलनेस प्लान्स" }, b: { en: "How they work and how to enrol.", hi: "कैसे काम करते हैं और कैसे जुड़ें।" } },
            { t: { en: "Diagnostics", hi: "डायग्नोस्टिक्स" }, b: { en: "Same-day in-house tests and imaging.", hi: "उसी दिन इन-हाउस टेस्ट व इमेजिंग।" } },
            { t: { en: "Emergencies", hi: "इमरजेंसी" }, b: { en: "What to do, who to call, and when.", hi: "क्या करें, किसे कॉल करें, और कब।" } },
          ].map((c) => (
            <Card key={c.t.en}><CardContent className="flex flex-col gap-2 p-5"><div className="font-display text-lg font-semibold tracking-tight">{c.t[lang]}</div><p className="text-sm text-muted-foreground">{c.b[lang]}</p></CardContent></Card>
          ))}
        </div>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-leaf/10 p-8 text-center ring-1 ring-leaf/20">
          <Badge className="rounded-full bg-leaf text-leaf-foreground hover:bg-leaf">{lang === "hi" ? "अब भी सवाल है?" : "Still curious?"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">{lang === "hi" ? "हम सीधे जवाब देने में खुश होंगे" : "We're happy to answer directly"}</h3>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton label={lang === "hi" ? "WhatsApp पर पूछें" : "Ask on WhatsApp"} />
            <Button asChild variant="outline" className="rounded-full"><a href={telLink(CLINIC.phone)}><Phone className="size-4" /> {CLINIC.phone}</a></Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
