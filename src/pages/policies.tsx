import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { POLICIES } from "@/lib/content";
import { ScrollText, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function PoliciesPage() {
  const { lang } = useI18n();
  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "नीतियाँ" : "Policies"}
        title={lang === "hi" ? "साफ़ साझा बातें" : "Things we like to be clear about"}
        lead={lang === "hi" ? "हमारी नीतियाँ छोटी और सीधी हैं — ताकि कोई आश्चर्य न हो।" : "Our policies are short and plain — no fine print, no surprises."}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {POLICIES.map((p) => (
            <Card key={p.title.en} className="hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col gap-3 p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><ScrollText className="size-5" /></span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{p.title[lang]}</h3>
                <p className="text-sm text-muted-foreground">{p.body[lang]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "हमारा वादा" : "Our promise"} title={lang === "hi" ? "तीन बातें जिन पर हम अडिग हैं" : "Three things we won't compromise on"}>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: { en: "No unnecessary tests", hi: "कोई अनावश्यक टेस्ट नहीं" }, b: { en: "Diagnostics ordered only when they meaningfully change the plan.", hi: "डायग्नोस्टिक्स तभी जब वे प्लान को सच में बदलें।" } },
            { t: { en: "Itemised estimates", hi: "विस्तृत अनुमान" }, b: { en: "We'll always discuss costs before any major procedure.", hi: "किसी भी बड़े प्रोसीजर से पहले लागत पर बात होगी।" } },
            { t: { en: "Plain-language consent", hi: "साफ़ भाषा में सहमति" }, b: { en: "If we can't explain it simply, we don't proceed.", hi: "अगर हम इसे सरलता से नहीं समझा सके, तो हम आगे नहीं बढ़ते।" } },
          ].map((c) => (
            <Card key={c.t.en}>
              <CardContent className="flex flex-col gap-2 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-coral/15 text-coral"><ShieldCheck className="size-5" /></span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{c.t[lang]}</h3>
                <p className="text-sm text-muted-foreground">{c.b[lang]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 text-center ring-1 ring-border">
          <Badge variant="secondary" className="rounded-full">{lang === "hi" ? "कोई सवाल?" : "Question?"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">{lang === "hi" ? "किसी नीति पर स्पष्टता चाहिए?" : "Need clarity on a policy?"}</h3>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton label={lang === "hi" ? "WhatsApp पर पूछें" : "Ask on WhatsApp"} />
          </div>
        </div>
      </Section>
    </div>
  );
}
