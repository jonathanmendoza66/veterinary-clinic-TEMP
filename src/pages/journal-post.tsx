import { Link, Navigate, useParams } from "react-router-dom";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { BLOG } from "@/lib/content";
import { ArrowLeft, ArrowRight, CalendarDays, User2 } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function JournalPostPage() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const post = BLOG.find((b) => b.slug === slug);
  if (!post) return <Navigate to="/journal" replace />;

  const idx = BLOG.findIndex((b) => b.slug === slug);
  const prev = BLOG[idx - 1];
  const next = BLOG[idx + 1];
  const related = BLOG.filter((b) => b.slug !== slug).slice(0, 3);

  const sections = lang === "hi"
    ? [
        { h: "मुख्य बातें", p: post.excerpt.hi },
        { h: "क्या देखें", p: "घर पर कुछ ऐसी छोटी चीज़ें होती हैं जिन्हें पकड़ना अक्सर दवा या टेस्ट से ज़्यादा कीमती साबित होता है — व्यवहार, भूख, चलना, सोना। एक हफ़्ते का संक्षिप्त नोट रखें और अगली विज़िट पर लाएं।" },
        { h: "कब डॉक्टर को दिखाएं", p: "अगर लक्षण तीन दिन से ज़्यादा रहें, या तेज़ी से बिगड़ें, तो प्रतीक्षा न करें। हम WhatsApp पर त्वरित मार्गदर्शन देते हैं।" },
        { h: "हमारी सलाह", p: "हम अनावश्यक टेस्ट कभी नहीं थोपते। हम पहले बात करते हैं, फिर ध्यान से जांच करते हैं, और तभी डायग्नोस्टिक्स ऑर्डर करते हैं जब वे प्लान को सच में बदलें।" },
      ]
    : [
        { h: "Key takeaways", p: post.excerpt.en },
        { h: "What to watch for", p: "Some of the most valuable signs are the small ones — appetite, energy, gait, sleep. Keep a brief one-week note before your next visit; the patterns often guide the workup more than any single test." },
        { h: "When to call the vet", p: "If symptoms persist beyond three days, or worsen quickly, don't wait. We offer quick guidance on WhatsApp during clinic hours." },
        { h: "Our approach", p: "We never push unnecessary tests. We talk first, examine carefully, and only order diagnostics when they will meaningfully change the plan." },
      ];

  return (
    <div>
      <Section className="pb-0">
        <div className="mx-auto max-w-3xl">
          <Button asChild variant="ghost" className="mb-4 rounded-full"><Link to="/journal"><ArrowLeft className="size-4" /> {lang === "hi" ? "ब्लॉग पर वापस" : "Back to journal"}</Link></Button>
          <Badge variant="secondary" className="rounded-full">{post.category[lang]}</Badge>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">{post.title[lang]}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><User2 className="size-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-4" /> {post.date}</span>
          </div>
          <img src={post.image} alt="" className="mt-6 aspect-[16/9] w-full rounded-3xl object-cover" />
        </div>
      </Section>

      <Section>
        <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
          {sections.map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight">{s.h}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </article>
      </Section>

      <Section align="center">
        <div className="mx-auto max-w-3xl rounded-3xl bg-leaf p-8 text-center text-leaf-foreground">
          <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{lang === "hi" ? "एक सवाल है?" : "Have a question about this?"}</h3>
          <p className="mt-2 opacity-90">{lang === "hi" ? "WhatsApp पर लिखें — डॉक्टर पढ़ेंगे और जवाब देंगे।" : "Message us on WhatsApp — a vet will read it and reply."}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <WhatsAppButton variant="secondary" message={lang === "hi" ? `नमस्ते, मेरा प्रश्न इस लेख पर है — ${post.title.hi}` : `Hi, my question is about — ${post.title.en}`} />
          </div>
        </div>
      </Section>

      <Section eyebrow={lang === "hi" ? "और लेख" : "Keep reading"} title={lang === "hi" ? "ब्लॉग से और" : "More from the journal"}>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((b) => (
            <Link to={`/journal/${b.slug}`} key={b.slug} className="group block h-full">
              <Card className="h-full overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={b.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <CardContent className="flex flex-col gap-2 p-5">
                  <Badge variant="secondary" className="w-fit rounded-full">{b.category[lang]}</Badge>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{b.title[lang]}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          {prev ? <Button asChild variant="outline" className="rounded-full"><Link to={`/journal/${prev.slug}`}><ArrowLeft className="size-4" /> {prev.title[lang]}</Link></Button> : <span />}
          {next ? <Button asChild variant="outline" className="rounded-full"><Link to={`/journal/${next.slug}`}>{next.title[lang]} <ArrowRight className="size-4" /></Link></Button> : <span />}
        </div>
      </Section>
    </div>
  );
}
