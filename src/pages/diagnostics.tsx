import { Section, Reveal } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useI18n } from "@/lib/i18n";
import { Microscope, Activity, FlaskConical, ScanLine, HeartPulse, Clock4, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TESTS = [
  { icon: FlaskConical, name: { en: "Complete Blood Count (CBC)", hi: "Complete Blood Count (CBC)" }, t: { en: "Same-day", hi: "उसी दिन" } },
  { icon: FlaskConical, name: { en: "Biochemistry Profile", hi: "Biochemistry Profile" }, t: { en: "Same-day", hi: "उसी दिन" } },
  { icon: FlaskConical, name: { en: "Urinalysis", hi: "Urinalysis" }, t: { en: "Same-day", hi: "उसी दिन" } },
  { icon: Activity, name: { en: "Blood Glucose & Electrolytes", hi: "Blood Glucose व Electrolytes" }, t: { en: "Within minutes", hi: "मिनटों में" } },
  { icon: ScanLine, name: { en: "Digital X-Ray", hi: "Digital X-Ray" }, t: { en: "Within 30 mins", hi: "30 मिनट में" } },
  { icon: ScanLine, name: { en: "Ultrasound (Abdominal)", hi: "Ultrasound (Abdominal)" }, t: { en: "Same-day report", hi: "उसी दिन रिपोर्ट" } },
  { icon: HeartPulse, name: { en: "ECG", hi: "ECG" }, t: { en: "On the spot", hi: "ऑन-द-स्पॉट" } },
  { icon: Microscope, name: { en: "Cytology & Skin Smears", hi: "Cytology व Skin Smears" }, t: { en: "Same-day", hi: "उसी दिन" } },
] as const;

export function DiagnosticsPage() {
  const { lang } = useI18n();
  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "डायग्नोस्टिक्स" : "Diagnostics"}
        title={lang === "hi" ? "सही जवाब। आज ही।" : "The right answer. Today."}
        lead={lang === "hi" ? "हमारी इन-हाउस लैब और इमेजिंग सूट का मतलब है कम इंतज़ार और जल्दी फ़ैसले।" : "Our in-house laboratory and imaging suite means less waiting and faster decisions."}
      >
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Clock4, t: { en: "Same-day results", hi: "उसी दिन रिज़ल्ट" }, b: { en: "Most tests turn around inside the visit.", hi: "ज़्यादातर टेस्ट विज़िट के दौरान ही पूरे।" } },
            { icon: Cpu, t: { en: "Modern equipment", hi: "आधुनिक उपकरण" }, b: { en: "Digital X-Ray, colour-flow ultrasound, ECG.", hi: "Digital X-Ray, colour-flow ultrasound, ECG।" } },
            { icon: ShieldCheck, t: { en: "Calm handling", hi: "शांत हैंडलिंग" }, b: { en: "Low-stress techniques throughout the workup.", hi: "पूरे एसेसमेंट में कम-तनाव तकनीकें।" } },
          ].map((c) => (
            <Card key={c.t.en}>
              <CardContent className="flex flex-col gap-3 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><c.icon className="size-5" /></span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{c.t[lang]}</h3>
                <p className="text-sm text-muted-foreground">{c.b[lang]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "टेस्ट सूची" : "Tests we run"} title={lang === "hi" ? "इन-हाउस उपलब्ध" : "Available in-house"}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TESTS.map((t) => (
            <Reveal key={t.name.en}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-2 p-4">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-coral/10 text-coral"><t.icon className="size-5" /></span>
                  <div className="font-medium">{t.name[lang]}</div>
                  <div className="text-xs text-muted-foreground">{t.t[lang]}</div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "रिज़ल्ट कैसे आएंगे" : "How results reach you"} title={lang === "hi" ? "एक साफ़, सरल फ़्लो" : "A clear, calm flow"}>
        <ol className="grid gap-3 md:grid-cols-4">
          {[
            { en: "Sample collected calmly during your visit.", hi: "विज़िट के दौरान शांति से सैम्पल लिया जाता है।" },
            { en: "Run on our in-house analysers.", hi: "हमारे इन-हाउस एनालाइज़र पर रन।" },
            { en: "Reviewed by your veterinarian.", hi: "आपके डॉक्टर द्वारा समीक्षा।" },
            { en: "Results explained, in plain language.", hi: "रिज़ल्ट सरल भाषा में समझाए जाते हैं।" },
          ].map((step, i) => (
            <li key={i} className="rounded-2xl border bg-card p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-leaf">{lang === "hi" ? `चरण ${i + 1}` : `Step ${i + 1}`}</div>
              <div className="mt-1 text-sm">{step[lang]}</div>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow={lang === "hi" ? "तस्वीरें" : "Inside the lab"} title={lang === "hi" ? "जहाँ टेस्ट चलते हैं" : "Where the tests happen"}>
        <div className="grid gap-3 md:grid-cols-3">
          <img src="/gallery-lab.webp" alt="" className="h-64 w-full rounded-3xl object-cover" />
          <img src="/gallery-surgery-prep.webp" alt="" className="h-64 w-full rounded-3xl object-cover" />
          <img src="/gallery-recovery.webp" alt="" className="h-64 w-full rounded-3xl object-cover" />
        </div>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 text-center ring-1 ring-border">
          <Badge variant="secondary" className="rounded-full">{lang === "hi" ? "अगला कदम" : "Next step"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">{lang === "hi" ? "डायग्नोस्टिक विज़िट प्लान करें" : "Plan a diagnostic visit"}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{lang === "hi" ? "WhatsApp पर लक्षण लिखें — हम सही टेस्ट चुन कर समय बताएंगे।" : "Share the symptoms on WhatsApp — we'll match the right tests and a time."}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton message={lang === "hi" ? "नमस्ते, मुझे डायग्नोस्टिक विज़िट प्लान करनी है।" : "Hi, I'd like to plan a diagnostic visit."} />
            <Button asChild variant="outline" className="rounded-full"><Link to="/services/diagnostics">{lang === "hi" ? "सेवा विवरण" : "Service details"} <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
