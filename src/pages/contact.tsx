import { useState } from "react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";
import { CLINIC } from "@/lib/content";
import { telLink, mailLink } from "@/lib/links";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function ContactPage() {
  const { lang, t } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <Section
        eyebrow={t("nav.contact")}
        title={lang === "hi" ? "हम जुड़ने की प्रतीक्षा में हैं" : "We'd love to hear from you"}
        lead={lang === "hi" ? "WhatsApp सबसे तेज़ रास्ता है — पर हमसे फ़ोन, ईमेल या क्लिनिक में भी मिल सकते हैं।" : "WhatsApp is the fastest route — but you can also call, email or simply walk in."}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><Phone className="size-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{lang === "hi" ? "फ़ोन" : "Phone"}</div>
                  <a href={telLink(CLINIC.phone)} className="font-display text-lg font-semibold underline-offset-4 hover:underline">{CLINIC.phone}</a>
                  <div className="text-xs text-muted-foreground">{lang === "hi" ? "इमरजेंसी:" : "Emergency:"} <a href={telLink(CLINIC.emergency)} className="underline-offset-4 hover:underline">{CLINIC.emergency}</a></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><MessageCircle className="size-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-display text-lg font-semibold">{CLINIC.phone}</div>
                  <WhatsAppButton size="sm" className="mt-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><Mail className="size-5" /></span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{lang === "hi" ? "ईमेल" : "Email"}</div>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-muted-foreground">{lang === "hi" ? "सामान्य:" : "General:"} </span><a className="font-medium underline-offset-4 hover:underline" href={mailLink(CLINIC.emails.hello)}>{CLINIC.emails.hello}</a></div>
                    <div><span className="text-muted-foreground">{lang === "hi" ? "अपॉइंटमेंट:" : "Appointments:"} </span><a className="font-medium underline-offset-4 hover:underline" href={mailLink(CLINIC.emails.appointments)}>{CLINIC.emails.appointments}</a></div>
                    <div><span className="text-muted-foreground">{lang === "hi" ? "केयर टीम:" : "Care team:"} </span><a className="font-medium underline-offset-4 hover:underline" href={mailLink(CLINIC.emails.care)}>{CLINIC.emails.care}</a></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-leaf/10 text-leaf"><MapPin className="size-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("label.address")}</div>
                  <div className="font-display text-lg font-semibold leading-tight">{CLINIC.address.line1}, {CLINIC.address.line2}</div>
                  <div className="text-sm text-muted-foreground">{CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.pin}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              {sent ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-leaf/10 text-leaf"><CheckCircle2 className="size-7" /></span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{lang === "hi" ? "धन्यवाद!" : "Thank you!"}</h3>
                  <p className="text-sm text-muted-foreground">{t("form.contact.thanks")}</p>
                  <WhatsAppButton variant="outline" />
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{lang === "hi" ? "मैसेज भेजें" : "Send a message"}</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="c-name">{t("form.name")}</Label>
                      <Input id="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="c-phone">{t("form.phone")}</Label>
                      <Input id="c-phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-email">{t("form.email")}</Label>
                    <Input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-msg">{t("form.message")}</Label>
                    <Textarea id="c-msg" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button type="submit" className="rounded-full gap-2"><Send className="size-4" /> {t("form.contact.submit")}</Button>
                    <WhatsAppButton variant="outline" />
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section eyebrow={t("label.openingHours")} title={lang === "hi" ? "हम कब खुले रहते हैं" : "When we're open"}>
        <Card>
          <CardContent className="grid gap-3 p-6 sm:grid-cols-2">
            {CLINIC.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                <div className="flex items-center gap-2"><Clock className="size-4 text-muted-foreground" /><span className="font-medium">{t(`day.${h.day}`)}</span></div>
                <span className="text-sm text-muted-foreground tabular-nums">{h.open} – {h.close}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>

      <Section eyebrow={lang === "hi" ? "नक्शा" : "Find us"} title={lang === "hi" ? "क्लिनिक का स्थान" : "Where the clinic is"}>
        <div className="overflow-hidden rounded-3xl border bg-card">
          <iframe
            title="Verdant Paws map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${CLINIC.address.line1}, Sector 49, Gurgaon`)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            className="h-[400px] w-full border-0"
            loading="lazy"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button asChild variant="outline" className="rounded-full"><a target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${encodeURIComponent(`${CLINIC.address.line1}, Sector 49, Gurgaon`)}`}><MapPin className="size-4" /> {lang === "hi" ? "Google Maps में खोलें" : "Open in Google Maps"}</a></Button>
          <Badge variant="secondary" className="rounded-full">{lang === "hi" ? "मुफ़्त पार्किंग उपलब्ध" : "Complimentary parking"}</Badge>
        </div>
      </Section>
    </div>
  );
}
