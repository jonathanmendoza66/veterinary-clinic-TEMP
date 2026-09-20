import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { LanguageToggle } from "@/components/language-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, Home, Stethoscope, CalendarHeart, Users, Phone, Sparkles, BookOpen, MessageSquare, MapPin, ShieldCheck, Image as ImageIcon, Microscope, Siren, HeartHandshake, BadgeIndianRupee, ScrollText, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { telLink } from "@/lib/links";
import { CLINIC } from "@/lib/content";

const PRIMARY_NAV = [
  { to: "/", labelKey: "nav.home", icon: Home },
  { to: "/services", labelKey: "nav.services", icon: Stethoscope },
  { to: "/book", labelKey: "nav.book", icon: CalendarHeart },
  { to: "/team", labelKey: "nav.team", icon: Users },
  { to: "/contact", labelKey: "nav.contact", icon: Phone },
];

const SHEET_NAV = [
  { to: "/about", labelKey: "nav.about", icon: Sparkles },
  { to: "/services", labelKey: "nav.services", icon: Stethoscope },
  { to: "/diagnostics", labelKey: "nav.diagnostics", icon: Microscope },
  { to: "/team", labelKey: "nav.team", icon: Users },
  { to: "/plans", labelKey: "nav.plans", icon: ShieldCheck },
  { to: "/pricing", labelKey: "nav.pricing", icon: BadgeIndianRupee },
  { to: "/conditions", labelKey: "nav.conditions", icon: HeartHandshake },
  { to: "/emergency", labelKey: "nav.emergency", icon: Siren },
  { to: "/gallery", labelKey: "nav.gallery", icon: ImageIcon },
  { to: "/journal", labelKey: "nav.blog", icon: BookOpen },
  { to: "/testimonials", labelKey: "nav.testimonials", icon: MessageSquare },
  { to: "/community", labelKey: "nav.community", icon: HeartHandshake },
  { to: "/faq", labelKey: "nav.faq", icon: FileText },
  { to: "/policies", labelKey: "nav.policies", icon: ScrollText },
  { to: "/contact", labelKey: "nav.contact", icon: MapPin },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <TopBar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <BottomTabBar />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

function TopBar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full safe-top transition-all",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
        <Link to="/" className="flex items-center gap-2 mr-auto">
          <BrandMark withWordmark />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {[
            { to: "/", labelKey: "nav.home" },
            { to: "/about", labelKey: "nav.about" },
            { to: "/services", labelKey: "nav.services" },
            { to: "/team", labelKey: "nav.team" },
            { to: "/plans", labelKey: "nav.plans" },
            { to: "/journal", labelKey: "nav.blog" },
            { to: "/contact", labelKey: "nav.contact" },
          ].map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                )
              }
            >
              {t(it.labelKey)}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <LanguageToggle compact />
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const { t } = useI18n();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden rounded-full" aria-label={t("label.menu")}>
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] sm:w-96 p-0">
        <SheetHeader className="border-b">
          <SheetTitle className="flex items-center gap-2">
            <BrandMark withWordmark />
          </SheetTitle>
          <SheetDescription>{t("footer.tagline")}</SheetDescription>
        </SheetHeader>
        <div className="overflow-y-auto p-4">
          <div className="grid grid-cols-2 gap-2">
            {SHEET_NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "group flex flex-col items-start gap-2 rounded-2xl border bg-card p-3 text-sm font-medium transition-colors",
                    isActive ? "border-primary/40 bg-primary/5" : "hover:border-primary/30"
                  )
                }
              >
                <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <item.icon className="size-4" />
                </span>
                <span>{t(item.labelKey)}</span>
              </NavLink>
            ))}
          </div>

          <div className="mt-6 grid gap-2">
            <Button asChild variant="outline" className="rounded-full justify-start gap-2">
              <a href={telLink()}>
                <Phone className="size-4" /> {CLINIC.phone}
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full justify-start gap-2 text-destructive">
              <a href={telLink(CLINIC.emergency)}>
                <Siren className="size-4" /> {CLINIC.emergency}
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function BottomTabBar() {
  const { t } = useI18n();
  const location = useLocation();
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-3 left-3 right-3 z-30 md:hidden safe-bottom"
    >
      <div className="mx-auto flex max-w-md items-center justify-between rounded-full border border-border/80 bg-background/90 p-1.5 shadow-lg backdrop-blur-xl">
        {PRIMARY_NAV.map((item) => {
          const active = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
          const isCenter = item.to === "/book";
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-0.5 rounded-full px-1 py-1.5 text-[10px] font-medium transition-colors",
                active && !isCenter ? "text-foreground" : "text-muted-foreground",
                isCenter && "scale-105"
              )}
            >
              <span
                className={cn(
                  "flex size-9 items-center justify-center rounded-full transition-all",
                  isCenter
                    ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/15"
                    : active
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-transparent"
                )}
              >
                <item.icon className="size-4" />
              </span>
              <span className={cn(isCenter ? "text-primary font-semibold" : "")}>{t(item.labelKey)}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

function FloatingWhatsApp() {
  const { lang } = useI18n();
  const message =
    lang === "hi"
      ? "नमस्ते Verdant Paws, मैं अपने [पालतू का प्रकार] के लिए अपॉइंटमेंट बुक करना चाहूंगा/चाहूंगी।"
      : "Hi Verdant Paws, I'd like to book an appointment for my [pet type].";
  return (
    <a
      href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-30 hidden md:flex md:bottom-6 items-center gap-2 rounded-full bg-leaf px-4 py-3 text-leaf-foreground shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 animate-glow"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.304 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
      </svg>
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  );
}

function Footer() {
  const { t, lang } = useI18n();
  const exploreLinks = [
    { to: "/about", labelKey: "nav.about" },
    { to: "/services", labelKey: "nav.services" },
    { to: "/team", labelKey: "nav.team" },
    { to: "/plans", labelKey: "nav.plans" },
    { to: "/pricing", labelKey: "nav.pricing" },
  ];
  const careLinks = [
    { to: "/diagnostics", labelKey: "nav.diagnostics" },
    { to: "/conditions", labelKey: "nav.conditions" },
    { to: "/emergency", labelKey: "nav.emergency" },
    { to: "/community", labelKey: "nav.community" },
    { to: "/faq", labelKey: "nav.faq" },
  ];
  const connectLinks = [
    { to: "/contact", labelKey: "nav.contact" },
    { to: "/book", labelKey: "nav.book" },
    { to: "/journal", labelKey: "nav.blog" },
    { to: "/gallery", labelKey: "nav.gallery" },
    { to: "/policies", labelKey: "nav.policies" },
  ];

  return (
    <footer className="border-t bg-secondary/40 mt-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <BrandMark withWordmark />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {t("label.registration")}: <span className="font-mono">{CLINIC.registration}</span>
          </p>
        </div>
        <FooterCol title={t("footer.explore")} items={exploreLinks} />
        <FooterCol title={t("footer.care")} items={careLinks} />
        <FooterCol title={t("footer.connect")} items={connectLinks} />
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>
            &copy; {new Date().getFullYear()} {lang === "hi" ? CLINIC.nameHi : CLINIC.name}. {t("footer.copyright")}
          </span>
          <span>
            {CLINIC.address.line1}, {CLINIC.address.line2}, {CLINIC.address.city} {CLINIC.address.pin}
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; labelKey: string }[] }) {
  const { t } = useI18n();
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-tight">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} className="hover:text-foreground transition-colors">
              {t(it.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
