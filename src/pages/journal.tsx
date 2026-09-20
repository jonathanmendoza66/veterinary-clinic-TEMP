import { useMemo, useState } from "react";
import { Section, Reveal } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";
import { BLOG } from "@/lib/content";
import { Search, ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const CATS = ["all", "Preventive Care", "Feline Health", "Senior Pet Care", "Puppy Care", "Dentistry"] as const;

export function JournalPage() {
  const { lang } = useI18n();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATS)[number]>("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return BLOG.filter((b) => {
      if (cat !== "all" && b.category.en !== cat) return false;
      if (query) {
        const hay = `${b.title.en} ${b.title.hi} ${b.excerpt.en} ${b.excerpt.hi}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });
  }, [q, cat]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div>
      <Section
        eyebrow={lang === "hi" ? "ब्लॉग" : "Journal"}
        title={lang === "hi" ? "हमारे डॉक्टरों की नोटबुक से" : "From our doctors' notebooks"}
        lead={lang === "hi" ? "गुड़गांव के पालतू पैरेंट्स के लिए, साक्ष्य पर आधारित और सीधी भाषा में।" : "Evidence-based notes for Gurgaon's pet parents, in plain language."}
      >
        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={lang === "hi" ? "लेख खोजें" : "Search articles"} className="pl-9 rounded-full" />
          </div>
          <div className="-mx-1 flex flex-1 gap-1.5 overflow-x-auto px-1 no-scrollbar">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:bg-accent"}`}>{c === "all" ? (lang === "hi" ? "सभी" : "All") : c}</button>
            ))}
          </div>
        </div>

        {featured && (
          <Reveal>
            <Link to={`/journal/${featured.slug}`} className="group mb-8 block">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] overflow-hidden md:aspect-auto">
                    <img src={featured.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <CardContent className="flex flex-col justify-center gap-3 p-6 md:p-8">
                    <Badge variant="secondary" className="w-fit rounded-full">{featured.category[lang]}</Badge>
                    <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{featured.title[lang]}</h2>
                    <p className="text-sm text-muted-foreground md:text-base">{featured.excerpt[lang]}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="size-3" /> {featured.date} · {featured.author}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-leaf">
                      {lang === "hi" ? "और पढ़ें" : "Read article"} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </Reveal>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((b) => (
            <Reveal key={b.slug}>
              <Link to={`/journal/${b.slug}`} className="group block h-full">
                <Card className="h-full overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={b.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <CardContent className="flex flex-col gap-2 p-5">
                    <Badge variant="secondary" className="w-fit rounded-full">{b.category[lang]}</Badge>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{b.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{b.excerpt[lang]}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground"><CalendarDays className="size-3" /> {b.date}</div>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed p-8 text-center text-muted-foreground">{lang === "hi" ? "कोई लेख नहीं मिला।" : "No articles match."}</div>
        )}
      </Section>
    </div>
  );
}
