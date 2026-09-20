import { Section, Reveal } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { useI18n } from "@/lib/i18n";
import { CONDITIONS } from "@/lib/content";
import { Activity, AlertTriangle, ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SIGNS = [
  { en: "Persistent itching or licking", hi: "लगातार खुजली या चाटना" },
  { en: "Sudden weight loss or gain", hi: "अचानक वज़न में बदलाव" },
  { en: "Vomiting more than once a day", hi: "दिन में एक से अधिक उल्टी" },
  { en: "Drinking more water than usual", hi: "सामान्य से अधिक पानी पीना" },
  { en: "Bad breath or bleeding gums", hi: "मुँह की दुर्गंध या मसूड़ों से खून" },
  { en: "Limping, stiffness, slow stairs", hi: "लंगड़ाहट, अकड़न, सीढ़ियों पर सुस्ती" },
  { en: "Coughing or laboured breathing", hi: "खांसी या साँस लेने में कठिनाई" },
  { en: "Behaviour changes — hiding, irritability", hi: "व्यवहार में बदलाव — छिपना, चिड़चिड़ाहट" },
] as const;

export function ConditionsPage() {
  const { lang } = useI18n();
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return CONDITIONS;
    return CONDITIONS.filter((c) => `${c.en} ${c.hi}`.toLowerCase().includes(query));
  }, [q]);

  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "रोग सूची" : "Conditions"}
        title={lang === "hi" ? "जो हम हर हफ्ते देखते हैं" : "What we treat every week"}
        lead={lang === "hi" ? "गुड़गांव में सबसे आम पालतू बीमारियाँ — और कब चिंता करनी चाहिए।" : "The pet conditions we see most across Gurgaon — and when to worry."}
      >
        <div className="mb-6 max-w-md">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={lang === "hi" ? "रोग खोजें" : "Search conditions"} className="pl-9 rounded-full" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <Reveal key={c.en}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex items-start gap-3 p-4">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral"><Stethoscope className="size-4" /></span>
                  <div>
                    <div className="font-medium">{c[lang]}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{lang === "hi" ? "साप्ताहिक रूप से देखे जाते हैं" : "Seen weekly at the clinic"}</div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "संकेत जो नज़रअंदाज़ न करें" : "Signs not to ignore"} title={lang === "hi" ? "कब डॉक्टर को बुलाना चाहिए" : "When to call the vet"}>
        <div className="grid gap-3 md:grid-cols-2">
          {SIGNS.map((s) => (
            <Card key={s.en}>
              <CardContent className="flex items-start gap-3 p-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"><AlertTriangle className="size-4" /></span>
                <span className="text-sm">{s[lang]}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "हमारा तरीका" : "Our approach"} title={lang === "hi" ? "हम चीज़ों को कैसे संभालते हैं" : "How we work things up"}>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: { en: "Listen first", hi: "पहले सुनें" }, b: { en: "We start by listening to your observations — they often hold the key.", hi: "हम पहले आपकी टिप्पणियाँ सुनते हैं — अक्सर वही असली कुंजी होती हैं।" } },
            { t: { en: "Examine carefully", hi: "ध्यान से जांच" }, b: { en: "A complete physical exam, calm and unhurried.", hi: "एक संपूर्ण शारीरिक जांच, शांत और बिना जल्दबाज़ी।" } },
            { t: { en: "Test only when needed", hi: "ज़रूरत होने पर ही टेस्ट" }, b: { en: "Diagnostics ordered when they meaningfully change the plan.", hi: "जब वे प्लान को सच में बदलें, तभी डायग्नोस्टिक्स।" } },
          ].map((b) => (
            <Card key={b.t.en}>
              <CardContent className="flex flex-col gap-2 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><Activity className="size-5" /></span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{b.t[lang]}</h3>
                <p className="text-sm text-muted-foreground">{b.b[lang]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-coral/10 p-8 text-center ring-1 ring-coral/20">
          <Badge className="rounded-full bg-coral text-coral-foreground hover:bg-coral">{lang === "hi" ? "अनिश्चित हैं?" : "Not sure?"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">{lang === "hi" ? "लक्षण लिखें — हम बताएंगे क्या करना है" : "Describe the symptoms — we'll guide you"}</h3>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton message={lang === "hi" ? "नमस्ते, मेरे पालतू में ये लक्षण हैं —" : "Hi, my pet has these symptoms —"} />
            <Button asChild variant="outline" className="rounded-full"><Link to="/emergency">{lang === "hi" ? "इमरजेंसी मार्गदर्शन" : "Emergency guidance"} <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
