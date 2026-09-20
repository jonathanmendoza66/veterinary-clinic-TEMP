import { Link } from "react-router-dom";
import { Section, Reveal } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useI18n, formatINR } from "@/lib/i18n";
import { CLINIC, SERVICES, PLANS, TEAM, TESTIMONIALS, CONDITIONS, FAQS, BLOG, GALLERY, COMMUNITY, VALUES, PET_TYPES, SUPPORT_TEAM } from "@/lib/content";
import { ServiceCard } from "@/components/service-card";
import { DoctorCard, DoctorAvatarRow } from "@/components/doctor-card";
import { PlanCard } from "@/components/plan-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Counter } from "@/components/counter";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { isOpenNow, todayHours, telLink, whatsappLink } from "@/lib/links";
import {
  ArrowRight, Phone, MapPin, Sparkles, MessageCircle, Star,
  Stethoscope, Microscope, ShieldCheck, Siren, Dog, Cat, Rabbit,
  Heart, Users, ScrollText, Quote, Award,
  Calendar, Activity, FlaskConical, Bone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const valueIcons = { heart: Heart, microscope: Microscope, "scroll-text": ScrollText, users: Users } as const;
const petIcons = { dog: Dog, cat: Cat, rabbit: Rabbit } as const;

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <QuickActions />
      <ServicesPreview />
      <ServiceSpotlight />
      <AboutTeaser />
      <PlansTeaser />
      <PetsWeTreat />
      <ConditionsStrip />
      <DiagnosticsPreview />
      <TeamTeaser />
      <ValuesBand />
      <Stats />
      <TestimonialsCarousel />
      <BlogPreview />
      <CommunityBand />
      <GalleryPreview />
      <ServiceArea />
      <FAQTeaser />
      <PricingTeaser />
      <EmergencyBanner />
      <NewsletterCTA />
      <FinalCTA />
    </div>
  );
}

/* =========================
   1. HERO
========================= */
function Hero() {
  const { t, lang } = useI18n();
  const open = isOpenNow();
  const today = todayHours();

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 mesh-gradient" />
      <div aria-hidden className="absolute -left-24 top-24 size-72 rounded-full bg-leaf/15 blur-3xl" />
      <div aria-hidden className="absolute -right-24 -top-12 size-72 rounded-full bg-coral/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-10 md:grid-cols-2 md:items-center md:py-20">
        <Reveal>
          <Badge variant="secondary" className="rounded-full gap-1.5 bg-background/70 backdrop-blur">
            <Sparkles className="size-3 text-leaf" /> {t("hero.eyebrow")}
          </Badge>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl">
            <span className="block">{t("hero.title.a")}</span>
            <span className="block">{t("hero.title.b")}</span>
            <span className="block text-leaf">{t("hero.title.c")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">{t("hero.sub")}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <WhatsAppButton size="lg" />
            <Button asChild size="lg" variant="outline" className="rounded-full gap-2">
              <a href={telLink(CLINIC.emergency)}>
                <Siren className="size-4 text-destructive" />
                {t("cta.callEmergency")}
              </a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 backdrop-blur">
              <span
                className={cn(
                  "relative flex size-2 items-center justify-center",
                  open ? "" : ""
                )}
              >
                <span
                  className={cn(
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                    open ? "bg-leaf" : "bg-muted-foreground/40"
                  )}
                />
                <span className={cn("relative inline-flex h-2 w-2 rounded-full", open ? "bg-leaf" : "bg-muted-foreground")} />
              </span>
              <span className="font-medium">
                {open ? t("hero.openNow") : t("hero.closed")}
              </span>
              {today && (
                <span className="text-muted-foreground">
                  · {open ? t("hero.closesAt") : t("hero.opensAt")} {open ? today.close : today.open}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <DoctorAvatarRow />
              <span>
                {lang === "hi" ? "तीन वेटरिनेरियन, 30+ साल का सामूहिक अनुभव" : "Three vets · 30+ years combined"}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden size-32 rounded-full bg-leaf/15 blur-2xl md:block" />
            <div className="absolute -bottom-8 -right-6 hidden size-40 rounded-full bg-coral/20 blur-3xl md:block" />
            <div className="relative mx-auto max-w-md rotate-1 rounded-[2rem] bg-card p-3 shadow-2xl ring-1 ring-black/5 md:max-w-lg">
              <img
                src="/hero-pets.webp"
                alt="Happy pets"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
              />
              {/* floating chips */}
              <div className="absolute -left-4 top-12 hidden rotate-[-6deg] rounded-2xl bg-card px-3 py-2 shadow-lg ring-1 ring-black/5 md:flex md:items-center md:gap-2 animate-float">
                <span className="flex size-8 items-center justify-center rounded-xl bg-coral/15 text-coral">
                  <Heart className="size-4" />
                </span>
                <div>
                  <div className="text-xs font-semibold leading-tight">8,400+</div>
                  <div className="text-[10px] text-muted-foreground">{lang === "hi" ? "पालतू देखे" : "pets cared for"}</div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-16 hidden rotate-[5deg] rounded-2xl bg-card px-3 py-2 shadow-lg ring-1 ring-black/5 md:flex md:items-center md:gap-2 animate-float" style={{ animationDelay: "1.2s" }}>
                <span className="flex size-8 items-center justify-center rounded-xl bg-leaf/15 text-leaf">
                  <ShieldCheck className="size-4" />
                </span>
                <div>
                  <div className="text-xs font-semibold leading-tight">98%</div>
                  <div className="text-[10px] text-muted-foreground">{lang === "hi" ? "संतुष्ट क्लाइंट" : "client satisfaction"}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   2. QUICK ACTIONS
========================= */
function QuickActions() {
  const { lang } = useI18n();
  const items = [
    { to: "/book", label: lang === "hi" ? "बुक" : "Book", icon: Calendar, color: "bg-leaf/15 text-leaf" },
    { href: telLink(), label: lang === "hi" ? "कॉल" : "Call", icon: Phone, color: "bg-coral/15 text-coral", external: true },
    { href: whatsappLink(lang === "hi" ? "नमस्ते Verdant Paws" : "Hi Verdant Paws"), label: "WhatsApp", icon: MessageCircle, color: "bg-leaf/15 text-leaf", external: true },
    { to: "/contact#map", label: lang === "hi" ? "रास्ता" : "Directions", icon: MapPin, color: "bg-accent text-accent-foreground" },
    { to: "/emergency", label: lang === "hi" ? "इमरजेंसी" : "Emergency", icon: Siren, color: "bg-destructive/15 text-destructive" },
  ];
  return (
    <Section className="py-6 md:py-8">
      <div className="grid grid-cols-5 gap-2 md:grid-cols-5 md:gap-4">
        {items.map((it) => {
          const inner = (
            <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-card p-3 ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md md:p-4">
              <span className={cn("flex size-10 items-center justify-center rounded-xl md:size-12", it.color)}>
                <it.icon className="size-5" />
              </span>
              <span className="text-[11px] font-semibold md:text-sm">{it.label}</span>
            </div>
          );
          return it.external ? (
            <a key={it.label} href={it.href} target="_blank" rel="noreferrer">{inner}</a>
          ) : (
            <Link key={it.label} to={it.to as string}>{inner}</Link>
          );
        })}
      </div>
    </Section>
  );
}

/* =========================
   3. ABOUT TEASER
========================= */
function AboutTeaser() {
  const { t, lang } = useI18n();
  return (
    <Section
      eyebrow={t("nav.about")}
      title={t("sec.about")}
      lead={t("sec.aboutLead")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/about">
            {t("cta.learnMore")} <ArrowRight className="size-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        {VALUES.map((v) => {
          const Icon = valueIcons[v.icon as keyof typeof valueIcons] ?? Heart;
          return (
            <Reveal key={v.title.en}>
              <Card className="h-full border-border/70 bg-card">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{v.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{v.body[lang]}</p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* =========================
   4. SERVICES PREVIEW
========================= */
function ServicesPreview() {
  const { t } = useI18n();
  return (
    <Section
      id="services"
      eyebrow={t("nav.services")}
      title={t("sec.services")}
      lead={t("sec.servicesLead")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/services">
            {t("cta.exploreServices")} <ArrowRight className="size-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.slice(0, 6).map((s) => (
          <Reveal key={s.slug}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   5. SERVICE SPOTLIGHT (rich cards)
========================= */
function ServiceSpotlight() {
  const { t, lang } = useI18n();
  const items = [
    { service: "wellness", img: "/gallery-senior-golden.webp" },
    { service: "surgery", img: "/gallery-surgery-prep.webp" },
    { service: "dental", img: "/gallery-dental.webp" },
    { service: "diagnostics", img: "/gallery-lab.webp" },
    { service: "emergency", img: "/gallery-recovery.webp" },
  ];
  return (
    <Section
      eyebrow={lang === "hi" ? "विशेष" : "Spotlight"}
      title={lang === "hi" ? "हम जिनमें वाकई पारंगत हैं" : "What we are quietly known for"}
    >
      <div className="grid gap-5 md:grid-cols-6">
        {items.map(({ service, img }, idx) => {
          const s = SERVICES.find((x) => x.slug === service)!;
          return (
            <Link
              key={service}
              to={`/services/${service}`}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-all hover:-translate-y-1 hover:shadow-xl",
                idx === 0 && "md:col-span-3 md:row-span-2",
                idx === 1 && "md:col-span-3",
                idx === 2 && "md:col-span-2",
                idx === 3 && "md:col-span-2",
                idx === 4 && "md:col-span-2"
              )}
            >
              <div className={cn("relative overflow-hidden", idx === 0 ? "aspect-[4/3]" : "aspect-[16/9]")}>
                <img src={img} alt={s.name[lang]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <Badge variant="secondary" className="w-fit rounded-full text-xs">
                  {t("label.startingAt")} {formatINR(s.price)}
                </Badge>
                <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">{s.name[lang]}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">{s.short[lang]}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-primary underline-offset-4 group-hover:underline">
                  {t("cta.viewMore")} <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

/* =========================
   6. PLANS TEASER
========================= */
function PlansTeaser() {
  const { t } = useI18n();
  return (
    <Section
      eyebrow={t("nav.plans")}
      title={t("sec.plans")}
      lead={t("sec.plansLead")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/plans">
            {t("cta.comparePlans")} <ArrowRight className="size-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {PLANS.map((p) => (
          <Reveal key={p.slug}><PlanCard plan={p} /></Reveal>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   7. PETS WE TREAT
========================= */
function PetsWeTreat() {
  const { t, lang } = useI18n();
  return (
    <Section eyebrow={t("nav.services")} title={t("sec.pets")} lead={t("sec.petsLead")} align="center">
      <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
        {PET_TYPES.map((p) => {
          const Icon = petIcons[p.emoji as keyof typeof petIcons] ?? Rabbit;
          return (
            <div key={p.key} className="group flex flex-col items-center gap-2 rounded-2xl bg-card p-4 ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-leaf/10 text-leaf transition-transform group-hover:scale-110">
                <Icon className="size-7" />
              </span>
              <span className="text-sm font-medium">{p[lang]}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* =========================
   8. CONDITIONS STRIP (marquee)
========================= */
function ConditionsStrip() {
  const { t, lang } = useI18n();
  const list = [...CONDITIONS, ...CONDITIONS];
  return (
    <Section
      eyebrow={t("nav.conditions")}
      title={t("sec.conditions")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/conditions">{t("cta.allConditions")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="relative overflow-hidden rounded-3xl border bg-card py-3">
        <div className="flex w-max animate-marquee gap-3 px-3">
          {list.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm">
              <span className="size-1.5 rounded-full bg-leaf" />
              {c[lang]}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-card to-transparent" />
      </div>
    </Section>
  );
}

/* =========================
   9. DIAGNOSTICS PREVIEW
========================= */
function DiagnosticsPreview() {
  const { t, lang } = useI18n();
  const lab = ["CBC", "Biochemistry", "Urinalysis", "Blood Glucose", "Electrolytes"];
  const imaging = [
    { name: "Digital X-Ray", icon: Bone },
    { name: "Ultrasound", icon: Activity },
    { name: "ECG", icon: Activity },
  ];
  return (
    <Section
      eyebrow={t("nav.diagnostics")}
      title={t("sec.diagnostics")}
      lead={t("sec.diagnosticsLead")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/diagnostics">{t("cta.exploreDiagnostics")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <img src="/gallery-lab.webp" alt="Lab" className="h-48 w-full object-cover md:h-full" />
            <CardContent className="space-y-3 p-5">
              <div className="flex items-center gap-2 text-leaf">
                <FlaskConical className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">{lang === "hi" ? "इन-हाउस लैब" : "In-house lab"}</span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {lang === "hi" ? "आज के नतीजे, आज ही" : "Today's results, today"}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {lab.map((l) => <Badge key={l} variant="outline" className="rounded-full">{l}</Badge>)}
              </div>
            </CardContent>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <CardContent className="order-2 space-y-3 p-5 md:order-1">
              <div className="flex items-center gap-2 text-leaf">
                <Microscope className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">{lang === "hi" ? "इमेजिंग" : "Imaging"}</span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {lang === "hi" ? "क्लिनिक के अंदर सटीक निदान" : "Precise diagnostics inside the clinic"}
              </h3>
              <ul className="space-y-2 text-sm">
                {imaging.map((it) => (
                  <li key={it.name} className="flex items-center gap-2">
                    <it.icon className="size-4 text-leaf" /> {it.name}
                  </li>
                ))}
              </ul>
            </CardContent>
            <img src="/gallery-surgery-prep.webp" alt="Imaging" className="order-1 h-48 w-full object-cover md:order-2 md:h-full" />
          </div>
        </Card>
      </div>
    </Section>
  );
}

/* =========================
   10. TEAM TEASER
========================= */
function TeamTeaser() {
  const { t } = useI18n();
  return (
    <Section
      eyebrow={t("nav.team")}
      title={t("sec.team")}
      lead={t("sec.teamLead")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/team">{t("cta.meetTeam")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {TEAM.map((d) => <Reveal key={d.slug}><DoctorCard doctor={d} /></Reveal>)}
      </div>
    </Section>
  );
}

/* =========================
   11. VALUES BAND (support team)
========================= */
function ValuesBand() {
  const { lang } = useI18n();
  return (
    <Section
      eyebrow={lang === "hi" ? "सपोर्ट टीम" : "Support team"}
      title={lang === "hi" ? "वो लोग जो दिन को सहज बनाते हैं" : "The people who quietly make the day work"}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {SUPPORT_TEAM.map((m) => (
          <Card key={m.name} className="overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <img src={m.photo} alt={m.name} className="size-16 rounded-2xl object-cover" />
              <div>
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role[lang]}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.years} {lang === "hi" ? "वर्ष अनुभव" : "yrs experience"}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   12. STATS
========================= */
function Stats() {
  const { t, lang } = useI18n();
  const stats = [
    { v: CLINIC.stats.years, suffix: "+", k: "stat.years", icon: Award },
    { v: CLINIC.stats.pets, suffix: "+", k: "stat.pets", icon: Heart },
    { v: CLINIC.stats.surgeries, suffix: "+", k: "stat.surgeries", icon: Stethoscope },
    { v: CLINIC.stats.satisfaction, suffix: "%", k: "stat.satisfaction", icon: Star },
    { v: CLINIC.stats.repeat, suffix: "%", k: "stat.repeat", icon: Users },
    { v: CLINIC.stats.emergencies, suffix: "+", k: "stat.emergencies", icon: Siren },
  ];
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-primary p-8 text-primary-foreground md:p-12">
        <div className="mb-6 max-w-xl">
          <Badge variant="secondary" className="rounded-full bg-primary-foreground/10 text-primary-foreground">{lang === "hi" ? "हमारा रिकॉर्ड" : "Our record"}</Badge>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">{t("sec.stats")}</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.k} className="">
              <s.icon className="mb-2 size-5 opacity-70" />
              <div className="font-display text-3xl font-semibold tabular-nums md:text-4xl">
                <Counter to={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm opacity-80">{t(s.k)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   13. TESTIMONIALS
========================= */
function TestimonialsCarousel() {
  const { t } = useI18n();
  return (
    <Section
      eyebrow={t("nav.testimonials")}
      title={t("sec.testimonials")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/testimonials">{t("cta.allStories")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {TESTIMONIALS.map((tm, i) => (
            <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={tm} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}

/* =========================
   14. BLOG PREVIEW
========================= */
function BlogPreview() {
  const { t, lang } = useI18n();
  return (
    <Section
      eyebrow={t("nav.blog")}
      title={t("sec.blog")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/journal">{t("cta.readJournal")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {BLOG.slice(0, 3).map((b) => (
          <Reveal key={b.slug}>
            <Link to={`/journal/${b.slug}`} className="group block">
              <Card className="overflow-hidden border-border/70 transition-shadow hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={b.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <Badge className="absolute left-3 top-3 rounded-full bg-background/90 text-foreground hover:bg-background">{b.category[lang]}</Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight line-clamp-2">{b.title[lang]}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-3">{b.excerpt[lang]}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{b.author}</span>
                    <span>{new Date(b.date).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { month: "short", day: "numeric" })}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {BLOG.slice(3).map((b) => (
          <Link key={b.slug} to={`/journal/${b.slug}`} className="group flex items-center gap-3 rounded-2xl border bg-card p-3 transition-shadow hover:shadow-md">
            <img src={b.image} alt="" className="size-16 shrink-0 rounded-xl object-cover" />
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">{b.category[lang]} · {b.author}</div>
              <div className="mt-0.5 truncate text-sm font-semibold">{b.title[lang]}</div>
            </div>
            <ArrowRight className="ml-auto size-4 text-muted-foreground" />
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   15. COMMUNITY BAND
========================= */
function CommunityBand() {
  const { t, lang } = useI18n();
  return (
    <Section
      eyebrow={t("nav.community")}
      title={t("sec.community")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/community">{t("cta.communityWork")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {COMMUNITY.map((c) => (
          <Reveal key={c.slug}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-3 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-coral/15 text-coral">
                  <Heart className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{c.title[lang]}</h3>
                <p className="text-sm text-muted-foreground">{c.blurb[lang]}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   16. GALLERY PREVIEW
========================= */
function GalleryPreview() {
  const { t, lang } = useI18n();
  return (
    <Section
      eyebrow={t("nav.gallery")}
      title={t("sec.gallery")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/gallery">{t("cta.openGallery")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="grid auto-rows-[140px] grid-cols-2 gap-2 md:auto-rows-[180px] md:grid-cols-4 md:gap-3">
        {GALLERY.slice(0, 8).map((g, i) => (
          <Link
            key={g.src}
            to="/gallery"
            className={cn(
              "group relative overflow-hidden rounded-2xl",
              i === 0 && "row-span-2",
              i === 5 && "row-span-2"
            )}
          >
            <img src={g.src} alt={g.caption[lang]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/40" />
            <span className="absolute bottom-2 left-2 rounded-full bg-background/85 px-2 py-0.5 text-[10px] font-medium opacity-0 transition-opacity group-hover:opacity-100">{g.caption[lang]}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* =========================
   17. SERVICE AREA
========================= */
function ServiceArea() {
  const { t, lang } = useI18n();
  return (
    <Section
      eyebrow={t("nav.contact")}
      title={t("sec.area")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/contact">{t("cta.planVisit")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="md:col-span-2 overflow-hidden rounded-3xl border">
          <div className="relative aspect-[16/9] w-full bg-secondary">
            <img src="/clinic-exterior.webp" alt="Clinic" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/90 p-4 backdrop-blur md:inset-x-6 md:bottom-6 md:p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-leaf">{t("label.address")}</div>
              <div className="font-display text-lg font-semibold leading-tight">
                {CLINIC.address.line1}, {CLINIC.address.line2}
              </div>
              <div className="text-sm text-muted-foreground">{CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.pin}</div>
            </div>
          </div>
        </div>
        <Card className="border-border/70">
          <CardContent className="p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-leaf">{lang === "hi" ? "सेवा क्षेत्र" : "Service area"}</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {CLINIC.area.slice(0, 14).map((a) => (
                <Badge key={a} variant="outline" className="rounded-full font-normal">{a}</Badge>
              ))}
            </div>
            <div className="mt-4 grid gap-2">
              <Button asChild variant="outline" className="rounded-full justify-start gap-2">
                <a href={telLink()}><Phone className="size-4" /> {CLINIC.phone}</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full justify-start gap-2 text-destructive">
                <a href={telLink(CLINIC.emergency)}><Siren className="size-4" /> {CLINIC.emergency}</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

/* =========================
   18. FAQ TEASER
========================= */
function FAQTeaser() {
  const { t, lang } = useI18n();
  return (
    <Section
      eyebrow={t("nav.faq")}
      title={t("sec.faq")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/faq">{t("cta.moreQuestions")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="rounded-2xl border bg-card">
          {FAQS.slice(0, 5).map((f, i) => (
            <AccordionItem key={i} value={`q${i}`} className={cn("px-4", i === 0 && "border-t-0")}>
              <AccordionTrigger className="text-left">{f.q[lang]}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a[lang]}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* =========================
   19. PRICING TEASER
========================= */
function PricingTeaser() {
  const { t, lang } = useI18n();
  return (
    <Section
      eyebrow={t("nav.pricing")}
      title={t("sec.pricing")}
      action={
        <Button asChild variant="ghost" className="rounded-full gap-2">
          <Link to="/pricing">{t("cta.fullPriceList")} <ArrowRight className="size-4" /></Link>
        </Button>
      }
    >
      <div className="overflow-hidden rounded-3xl border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr>
              <th className="p-4 font-semibold">{lang === "hi" ? "सेवा" : "Service"}</th>
              <th className="p-4 font-semibold text-right">{t("label.startingAt")}</th>
            </tr>
          </thead>
          <tbody>
            {SERVICES.slice(0, 6).map((s) => (
              <tr key={s.slug} className="border-t">
                <td className="p-4">
                  <div className="font-medium">{s.name[lang]}</div>
                  <div className="text-xs text-muted-foreground">{s.short[lang]}</div>
                </td>
                <td className="p-4 text-right tabular-nums font-semibold">{formatINR(s.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* =========================
   20. EMERGENCY BANNER
========================= */
function EmergencyBanner() {
  const { t, lang } = useI18n();
  return (
    <section className="px-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-destructive/30 bg-gradient-to-r from-destructive/10 via-coral/10 to-destructive/10 p-6 md:flex md:items-center md:gap-8 md:p-10">
        <div className="flex items-center gap-3 md:flex-1">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-destructive text-destructive-foreground animate-glow">
            <Siren className="size-6" />
          </span>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-destructive">{t("label.emergency24")}</div>
            <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              {lang === "hi" ? "हम चौबीसों घंटे फोन पर हैं।" : "We're on the phone, around the clock."}
            </h3>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 md:mt-0 md:flex-row">
          <Button asChild size="lg" variant="destructive" className="rounded-full gap-2">
            <a href={telLink(CLINIC.emergency)}><Phone className="size-4" /> {CLINIC.emergency}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/emergency">{lang === "hi" ? "इमरजेंसी गाइड" : "Emergency guide"}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =========================
   21. NEWSLETTER
========================= */
function NewsletterCTA() {
  const { lang } = useI18n();
  const message = lang === "hi" ? "मुझे WhatsApp पर पेट केयर सुझाव भेजें।" : "Please send me pet care tips on WhatsApp.";
  return (
    <Section align="center">
      <div className="mx-auto max-w-2xl rounded-3xl bg-card p-8 text-center ring-1 ring-border">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-leaf/15 text-leaf">
          <Quote className="size-5" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {lang === "hi" ? "हर महीने एक छोटा, उपयोगी पेट केयर नोट" : "One short, useful pet-care note each month"}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {lang === "hi"
            ? "WhatsApp पर सब्सक्राइब करें — एक टैप, कोई स्पैम नहीं।"
            : "Subscribe via WhatsApp — one tap, no spam."}
        </p>
        <WhatsAppButton message={message} className="mt-5" label={lang === "hi" ? "WhatsApp पर सब्सक्राइब करें" : "Subscribe on WhatsApp"} />
      </div>
    </Section>
  );
}

/* =========================
   22. FINAL CTA
========================= */
function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="px-4 pb-12 md:pb-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-leaf p-8 text-leaf-foreground md:p-14">
        <div aria-hidden className="absolute -right-10 -top-10 size-72 rounded-full bg-coral/20 blur-3xl" />
        <div aria-hidden className="absolute -left-10 -bottom-10 size-72 rounded-full bg-background/10 blur-3xl" />
        <div className="relative grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance">{t("sec.cta")}</h3>
            <p className="mt-3 max-w-md text-base opacity-90">{t("sec.ctaSub")}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <WhatsAppButton size="lg" variant="default" className="bg-background text-foreground hover:bg-background/90" />
            <Button asChild size="lg" variant="outline" className="rounded-full border-background/30 bg-transparent text-leaf-foreground hover:bg-background/10">
              <a href={telLink()}><Phone className="size-4" /> {t("cta.call")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
