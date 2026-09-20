import { useMemo, useState } from "react";
import { Section, Reveal } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { useI18n, formatINR } from "@/lib/i18n";
import { SERVICES } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { key: "all", en: "All", hi: "सभी" },
  { key: "wellness", en: "Wellness", hi: "वेलनेस" },
  { key: "diagnostics", en: "Diagnostics", hi: "डायग्नोस्टिक्स" },
  { key: "surgery", en: "Surgery", hi: "सर्जरी" },
  { key: "dental", en: "Dental", hi: "डेंटल" },
  { key: "preventive", en: "Preventive", hi: "प्रिवेंटिव" },
  { key: "emergency", en: "Emergency", hi: "इमरजेंसी" },
  { key: "puppy-kitten", en: "Puppy & Kitten", hi: "पपी व किटन" },
  { key: "senior", en: "Senior", hi: "सीनियर" },
] as const;

const TAG_FOR = (slug: string): (typeof CATEGORIES)[number]["key"] => {
  if (slug === "vaccinations" || slug === "wellness") return "wellness";
  if (slug === "diagnostics") return "diagnostics";
  if (slug === "surgery") return "surgery";
  if (slug === "dental") return "dental";
  if (slug === "preventive") return "preventive";
  if (slug === "emergency") return "emergency";
  if (slug === "puppy-kitten") return "puppy-kitten";
  if (slug === "senior") return "senior";
  return "all";
};

export function ServicesPage() {
  const { lang, t } = useI18n();
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]["key"]>("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      if (cat !== "all" && TAG_FOR(s.slug) !== cat) return false;
      if (q) {
        const hay = `${s.name.en} ${s.name.hi} ${s.short.en} ${s.short.hi}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [cat, query]);

  return (
    <div>
      <Section
        eyebrow={t("nav.services")}
        title={lang === "hi" ? "रूटीन से ले कर दुर्लभ — वही ध्यान।" : "From routine to rare — handled the same way."}
        lead={lang === "hi" ? "हमारी सभी सेवाओं की एक स्पष्ट सूची, पारदर्शी शुरुआती कीमतों के साथ।" : "A clear list of every service we offer, with transparent starting prices."}
      >
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === "hi" ? "सेवा खोजें" : "Search services"}
              className="pl-9 rounded-full"
            />
          </div>
          <div className="-mx-1 flex flex-1 gap-1.5 overflow-x-auto px-1 no-scrollbar">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  cat === c.key ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:bg-accent"
                )}
              >
                {c[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <Reveal key={s.slug}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed p-8 text-center text-muted-foreground">
            {lang === "hi" ? "कोई सेवा नहीं मिली। बेझिझक हमें WhatsApp पर लिखें।" : "No services match. Feel free to message us on WhatsApp."}
          </div>
        )}
      </Section>

      {/* Helper band */}
      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 text-center ring-1 ring-border">
          <Badge variant="secondary" className="rounded-full">{lang === "hi" ? "क्या पता नहीं किसकी ज़रूरत है?" : "Not sure which to choose?"}</Badge>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {lang === "hi" ? "हमारी टीम WhatsApp पर सलाह देगी।" : "Our team will guide you on WhatsApp."}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "hi" ? "अपने पालतू की उम्र और लक्षण लिखें — हम सही सेवा बताएंगे।" : "Tell us your pet's age and symptoms — we'll point you to the right service."}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton />
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/pricing">{t("cta.fullPriceList")}</Link>
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {lang === "hi" ? "वेलनेस जांच अब" : "Wellness exams from"} {formatINR(900)}
          </p>
        </div>
      </Section>
    </div>
  );
}
