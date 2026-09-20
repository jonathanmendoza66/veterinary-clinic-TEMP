import { useState } from "react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { GALLERY } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const TABS = [
  { key: "all", en: "All", hi: "सभी" },
  { key: "clinic", en: "Clinic", hi: "क्लिनिक" },
  { key: "patients", en: "Patients", hi: "मरीज़" },
  { key: "community", en: "Community", hi: "समुदाय" },
] as const;

const TAG_FOR = (src: string): (typeof TABS)[number]["key"] => {
  if (src.includes("lab") || src.includes("surgery") || src.includes("dental") || src.includes("recovery") || src.includes("lounge")) return "clinic";
  if (src.includes("community") || src.includes("rescue")) return "community";
  return "patients";
};

export function GalleryPage() {
  const { lang } = useI18n();
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("all");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = tab === "all" ? GALLERY : GALLERY.filter((g) => TAG_FOR(g.src) === tab);

  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "गैलरी" : "Gallery"}
        title={lang === "hi" ? "वर्डेंट पॉज़ की झलकियाँ" : "Glimpses from Verdant Paws"}
        lead={lang === "hi" ? "हमारी टीम, हमारे मरीज़ और हमारे शांत क्लिनिकल कोने।" : "Our team, our patients and our quiet clinical corners."}
      >
        <div className="mb-6 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                tab === t.key ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:bg-accent"
              )}
            >
              {t[lang]}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
          {filtered.map((g) => (
            <button key={g.src} onClick={() => setOpen(g.src)} className="block w-full overflow-hidden rounded-2xl ring-1 ring-border transition-transform hover:-translate-y-1 hover:shadow-lg break-inside-avoid">
              <img src={g.src} alt={g.caption[lang]} loading="lazy" className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="bg-card p-3 text-left">
                <div className="text-sm font-medium">{g.caption[lang]}</div>
                <Badge variant="outline" className="mt-1.5 rounded-full text-[10px]">{TABS.find((t) => t.key === TAG_FOR(g.src))?.[lang]}</Badge>
              </div>
            </button>
          ))}
        </div>
      </Section>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {open && <img src={open} alt="" className="w-full" />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
