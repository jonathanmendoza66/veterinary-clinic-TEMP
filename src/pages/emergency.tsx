import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { CLINIC } from "@/lib/content";
import { telLink } from "@/lib/links";
import { Phone, Siren, Clock, AlertTriangle, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/whatsapp-button";

const SCENARIOS = [
  { t: { en: "Trauma or road accident", hi: "चोट या सड़क हादसा" }, b: { en: "Don't move the pet excessively. Stabilise on a firm surface and call us en-route.", hi: "पालतू को अधिक न हिलाएं। उसे एक सख़्त सतह पर स्थिर रखें और रास्ते में हमें कॉल करें।" } },
  { t: { en: "Suspected poisoning", hi: "ज़हर का संदेह" }, b: { en: "Bring a sample or photograph of the substance. Do not induce vomiting unless instructed.", hi: "उस पदार्थ का सैम्पल या फोटो साथ लाएं। निर्देश के बिना उल्टी न कराएं।" } },
  { t: { en: "Difficulty breathing", hi: "साँस लेने में तकलीफ" }, b: { en: "Keep the pet calm and cool, avoid restraint. Move quickly to the clinic.", hi: "पालतू को शांत व ठंडा रखें, ज़्यादा पकड़ें नहीं। जल्दी क्लिनिक ले आएं।" } },
  { t: { en: "Seizures", hi: "दौरे" }, b: { en: "Do not touch the mouth. Note the duration and bring video if possible.", hi: "मुंह को न छुएं। दौरे की अवधि नोट करें और संभव हो तो वीडियो लाएं।" } },
  { t: { en: "Heatstroke", hi: "हीटस्ट्रोक" }, b: { en: "Move to shade immediately, apply cool (not cold) water on paws and belly.", hi: "तुरंत छाया में लाएं, पंजों व पेट पर ठंडा (बहुत ठंडा नहीं) पानी डालें।" } },
  { t: { en: "Bloated abdomen", hi: "पेट फूलना" }, b: { en: "A potentially life-threatening sign in deep-chested dogs. Call us right away.", hi: "गहरी छाती वाले कुत्तों में जानलेवा संकेत। तुरंत कॉल करें।" } },
] as const;

export function EmergencyPage() {
  const { lang } = useI18n();
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-coral/15 to-transparent">
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-20">
          <Badge className="rounded-full bg-coral text-coral-foreground hover:bg-coral gap-1"><Siren className="size-3" /> {lang === "hi" ? "इमरजेंसी" : "Emergency"}</Badge>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {lang === "hi" ? "एक कॉल। तेज़ ट्राइएज।" : "One call. Fast triage."}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {lang === "hi" ? "इमरजेंसी में सबसे पहले हमारी हेल्पलाइन पर कॉल करें — हम फ़ोन पर मार्गदर्शन देंगे और रिसेप्शन को तैयार रखेंगे।" : "In an emergency, call our helpline first — we'll guide you on the phone and ready the team for arrival."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-coral text-coral-foreground hover:bg-coral/90 gap-2">
              <a href={telLink(CLINIC.emergency)}><Phone className="size-4" /> {CLINIC.emergency}</a>
            </Button>
            <WhatsAppButton variant="outline" message={lang === "hi" ? "इमरजेंसी: मेरे पालतू को तुरंत मदद चाहिए।" : "Emergency: my pet needs immediate help."} label={lang === "hi" ? "WhatsApp इमरजेंसी" : "Emergency WhatsApp"} />
          </div>
        </div>
      </section>

      <Section eyebrow={lang === "hi" ? "तुरंत क्या करें" : "What to do first"} title={lang === "hi" ? "पहले 60 सेकंड" : "The first 60 seconds"}>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { i: 1, t: { en: "Stay calm", hi: "शांत रहें" }, b: { en: "Pets read your tone first. Calm voice, calm pet.", hi: "पालतू पहले आपकी आवाज़ पढ़ते हैं। शांत आवाज़, शांत पालतू।" } },
            { i: 2, t: { en: "Call the helpline", hi: "हेल्पलाइन को कॉल करें" }, b: { en: "Reach our 24/7 emergency line for triage.", hi: "ट्राइएज के लिए 24/7 हेल्पलाइन पर कॉल करें।" } },
            { i: 3, t: { en: "Move carefully", hi: "ध्यान से ले जाएं" }, b: { en: "Use a firm surface for trauma; minimise movement.", hi: "ट्रॉमा के लिए सख्त सतह; कम से कम हिलाव।" } },
          ].map((s) => (
            <Card key={s.i}>
              <CardContent className="flex items-start gap-3 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-coral text-coral-foreground font-display font-bold">{s.i}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{s.t[lang]}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.b[lang]}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "स्थितियाँ" : "Scenarios"} title={lang === "hi" ? "क्या करें — और क्या न करें" : "What to do — and not to do"}>
        <div className="grid gap-4 md:grid-cols-2">
          {SCENARIOS.map((s) => (
            <Card key={s.t.en} className="hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col gap-2 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-coral/15 text-coral"><AlertTriangle className="size-5" /></span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{s.t[lang]}</h3>
                <p className="text-sm text-muted-foreground">{s.b[lang]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "घंटों के बाद" : "After hours"} title={lang === "hi" ? "हम 24/7 फ़ोन पर हैं" : "We're on the phone 24/7"}>
        <Card>
          <CardContent className="grid items-center gap-6 p-6 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-coral">
                <Clock className="size-5" />
                <div className="font-display text-xl font-semibold">{lang === "hi" ? "24 घंटे · 7 दिन" : "24 hours · 7 days"}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {lang === "hi" ? "क्लिनिक के बंद समय में भी हमारा एक डॉक्टर फ़ोन पर त्वरित मार्गदर्शन देता है — और ज़रूरत पड़ने पर ज़िम्मेदारी से रेफरल किया जाता है।" : "Outside clinic hours, an on-call vet provides phone guidance — with responsible referrals when an in-person ER is required."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild className="rounded-full gap-2"><a href={telLink(CLINIC.emergency)}><Phone className="size-4" /> {CLINIC.emergency}</a></Button>
                <Button asChild variant="outline" className="rounded-full gap-2"><a href={`https://maps.google.com/?q=${encodeURIComponent(`${CLINIC.address.line1}, ${CLINIC.address.line2}, ${CLINIC.address.city}`)}`} target="_blank" rel="noreferrer"><MapPin className="size-4" /> {lang === "hi" ? "रास्ता" : "Directions"}</a></Button>
              </div>
            </div>
            <div className="rounded-2xl border bg-secondary/40 p-4 text-sm">
              <div className="font-semibold mb-2">{lang === "hi" ? "फ़ोन पर तैयार रखें" : "Have ready on the call"}</div>
              <ul className="space-y-1.5 text-muted-foreground">
                <li>{lang === "hi" ? "पालतू की उम्र, नस्ल और वज़न" : "Pet's age, breed and weight"}</li>
                <li>{lang === "hi" ? "लक्षण कब शुरू हुए" : "When symptoms began"}</li>
                <li>{lang === "hi" ? "दवा और एलर्जी की जानकारी" : "Current medications and allergies"}</li>
                <li>{lang === "hi" ? "कोई हाल का प्रोसीजर / सर्जरी" : "Any recent procedure / surgery"}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 text-center ring-1 ring-border">
          <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{lang === "hi" ? "नियमित अपॉइंटमेंट?" : "A non-urgent visit?"}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{lang === "hi" ? "अगर यह इमरजेंसी नहीं है, हमारा बुकिंग पेज इस्तेमाल करें।" : "If this isn't urgent, please use our regular booking page."}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button asChild variant="outline" className="rounded-full"><Link to="/book">{lang === "hi" ? "बुकिंग पेज" : "Booking page"} <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
