import { Link, useParams, Navigate } from "react-router-dom";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n, formatINR } from "@/lib/i18n";
import { SERVICES, FAQS } from "@/lib/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceCard } from "@/components/service-card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Check, ArrowRight, Clock4, ShieldCheck, MapPin } from "lucide-react";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const { lang, t } = useI18n();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const includes = {
    en: ["Detailed history & physical exam", "Pet-tailored advice", "Plain-language explanation", "Itemised cost estimate"],
    hi: ["विस्तृत इतिहास व शारीरिक जांच", "आपके पालतू अनुसार सलाह", "साफ़ भाषा में समझाइश", "विस्तृत लागत अनुमान"],
  } as const;

  const prep = {
    en: ["Bring previous medical records, if any", "Note recent diet changes", "Use a comfortable carrier or leash", "Arrive 10 minutes early to settle in"],
    hi: ["यदि उपलब्ध हों तो पुराने मेडिकल रिकॉर्ड लाएँ", "हाल की डाइट में बदलाव नोट करें", "आरामदायक कैरियर या लीश इस्तेमाल करें", "10 मिनट पहले पहुँच कर पालतू को व्यवस्थित होने दें"],
  } as const;

  const aftercare = {
    en: ["Watch for behaviour changes for 24 hours", "Maintain hydration and gentle activity", "Reach out via WhatsApp for follow-up questions"],
    hi: ["24 घंटे तक व्यवहार में बदलाव पर नज़र रखें", "हाइड्रेशन व हल्की गतिविधि बनाए रखें", "फॉलो-अप के लिए WhatsApp पर लिखें"],
  } as const;

  const message =
    lang === "hi"
      ? `नमस्ते, मैं ${service.name.hi} सेवा बुक करना चाहूंगा/चाहूंगी।`
      : `Hi, I'd like to book the ${service.name.en} service.`;

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <Section className="pb-0">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <Badge variant="secondary" className="rounded-full">{service.name[lang]}</Badge>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">{service.name[lang]}</h1>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">{service.detail[lang]}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Badge className="rounded-full bg-leaf text-leaf-foreground hover:bg-leaf">
                {t("label.startingAt")} {formatINR(service.price)}
              </Badge>
              <Badge variant="outline" className="rounded-full">
                <Clock4 className="mr-1 size-3" /> {lang === "hi" ? "आम तौर पर 30–45 मिनट" : "Typically 30–45 mins"}
              </Badge>
              <Badge variant="outline" className="rounded-full">
                <MapPin className="mr-1 size-3" /> {lang === "hi" ? "क्लिनिक में" : "In-clinic"}
              </Badge>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton message={message} label={t("cta.bookService")} />
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/services">{t("cta.viewAll")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={
                {
                  diagnostics: "/gallery-lab.webp",
                  surgery: "/gallery-surgery-prep.webp",
                  dental: "/gallery-dental.webp",
                  emergency: "/gallery-recovery.webp",
                  vaccinations: "/gallery-puppy-vaccine.webp",
                  wellness: "/gallery-senior-golden.webp",
                  senior: "/gallery-senior-golden.webp",
                  "puppy-kitten": "/gallery-puppy-vaccine.webp",
                  preventive: "/gallery-cat-consult.webp",
                  dermatology: "/gallery-cat-consult.webp",
                }[service.slug] ?? "/hero-pets.webp"
              }
              alt={service.name[lang]}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-md ring-1 ring-border"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "क्या शामिल है" : "What's included"} title={lang === "hi" ? "हर विज़िट में आपको ये मिलेगा" : "What every visit includes"}>
        <div className="grid gap-3 sm:grid-cols-2">
          {includes[lang].map((i) => (
            <Card key={i}>
              <CardContent className="flex items-start gap-3 p-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-leaf">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm">{i}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "तैयारी" : "Prep checklist"} title={lang === "hi" ? "विज़िट की एक छोटी तैयारी" : "A short pre-visit checklist"}>
        <ol className="grid gap-3 sm:grid-cols-2">
          {prep[lang].map((p, i) => (
            <li key={p} className="flex items-start gap-3 rounded-2xl border bg-card p-4">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold">{i + 1}</span>
              <span className="text-sm">{p}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow={lang === "hi" ? "बाद की देखभाल" : "Aftercare"} title={lang === "hi" ? "विज़िट के बाद क्या करें" : "What happens after the visit"}>
        <div className="grid gap-3 md:grid-cols-3">
          {aftercare[lang].map((a) => (
            <Card key={a}>
              <CardContent className="flex items-start gap-3 p-4">
                <ShieldCheck className="size-5 text-leaf shrink-0" />
                <span className="text-sm">{a}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={t("nav.faq")} title={lang === "hi" ? "अक्सर पूछे गए सवाल" : "Frequently asked"}>
        <Accordion type="single" collapsible className="rounded-2xl border bg-card">
          {FAQS.slice(0, 4).map((f, i) => (
            <AccordionItem key={i} value={`q${i}`} className="px-4">
              <AccordionTrigger className="text-left">{f.q[lang]}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a[lang]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section eyebrow={lang === "hi" ? "और जानें" : "Related"} title={lang === "hi" ? "ये भी देख लें" : "You may also like"}>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {related.map((r) => <ServiceCard key={r.slug} service={r} />)}
        </div>
        <div className="mt-6 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/services">
              {t("cta.exploreServices")} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
