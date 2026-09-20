import { useMemo, useState } from "react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useI18n } from "@/lib/i18n";
import { CLINIC, SERVICES, TEAM, PET_TYPES } from "@/lib/content";
import { whatsappLink } from "@/lib/links";
import { Calendar, Clock, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export function BookPage() {
  const { lang, t } = useI18n();
  const [form, setForm] = useState({
    petType: "dog",
    petName: "",
    service: "wellness",
    vet: "any",
    time: "morning",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const summary = useMemo(() => {
    const pet = PET_TYPES.find((p) => p.key === form.petType);
    const svc = SERVICES.find((s) => s.slug === form.service);
    const vet = TEAM.find((d) => d.slug === form.vet);
    if (lang === "hi") {
      return [
        `नमस्ते Verdant Paws,`,
        ``,
        `मैं अपॉइंटमेंट बुक करना चाहूंगा/चाहूंगी।`,
        `नाम: ${form.name || "—"}`,
        `फ़ोन: ${form.phone || "—"}`,
        `पालतू: ${pet?.hi || "—"}${form.petName ? ` (${form.petName})` : ""}`,
        `सेवा: ${svc?.name.hi || "—"}`,
        `पसंदीदा डॉक्टर: ${vet ? vet.name : (lang === "hi" ? "कोई भी उपलब्ध" : "Any available")}`,
        `पसंदीदा समय: ${form.time === "morning" ? "सुबह" : form.time === "afternoon" ? "दोपहर" : "शाम"}`,
        form.message ? `नोट: ${form.message}` : ``,
      ].filter(Boolean).join("\n");
    }
    return [
      `Hi Verdant Paws,`,
      ``,
      `I'd like to book an appointment.`,
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Pet: ${pet?.en || "—"}${form.petName ? ` (${form.petName})` : ""}`,
      `Service: ${svc?.name.en || "—"}`,
      `Preferred vet: ${vet ? vet.name : "Any available"}`,
      `Preferred time: ${form.time}`,
      form.message ? `Notes: ${form.message}` : ``,
    ].filter(Boolean).join("\n");
  }, [form, lang]);

  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(summary), "_blank", "noreferrer");
    setSent(true);
  };

  return (
    <div>
      <Section
        eyebrow={t("nav.book")}
        title={lang === "hi" ? "अपनी विज़िट प्लान करें" : "Plan your visit"}
        lead={lang === "hi" ? "नीचे फ़ॉर्म भरें — हम WhatsApp पर एक तैयार मैसेज खोलेंगे।" : "Fill the form below — we'll open a pre-filled WhatsApp message for you."}
      >
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <Card>
            <CardContent className="p-6">
              {sent ? (
                <div className="flex flex-col items-center gap-3 py-12 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-leaf/10 text-leaf"><CheckCircle2 className="size-7" /></span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{lang === "hi" ? "WhatsApp खोला गया" : "WhatsApp opened"}</h3>
                  <p className="text-sm text-muted-foreground">{lang === "hi" ? "बस भेज दें — हम क्लिनिक के समय में जवाब देंगे।" : "Just hit send — we'll reply during clinic hours."}</p>
                  <Button variant="outline" className="rounded-full" onClick={() => setSent(false)}>{lang === "hi" ? "एक और मैसेज" : "Send another"}</Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label>{t("form.petType")}</Label>
                      <Select value={form.petType} onValueChange={(v) => setForm({ ...form, petType: v })}>
                        <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {PET_TYPES.map((p) => <SelectItem key={p.key} value={p.key}>{p[lang]}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="b-petname">{lang === "hi" ? "पालतू का नाम" : "Pet's name"}</Label>
                      <Input id="b-petname" value={form.petName} onChange={(e) => setForm({ ...form, petName: e.target.value })} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label>{t("form.service")}</Label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => <SelectItem key={s.slug} value={s.slug}>{s.name[lang]}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label>{t("form.preferredVet")}</Label>
                      <Select value={form.vet} onValueChange={(v) => setForm({ ...form, vet: v })}>
                        <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">{t("form.anyVet")}</SelectItem>
                          {TEAM.map((d) => <SelectItem key={d.slug} value={d.slug}>{d.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label>{t("form.preferredTime")}</Label>
                      <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                        <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">{t("form.morning")}</SelectItem>
                          <SelectItem value="afternoon">{t("form.afternoon")}</SelectItem>
                          <SelectItem value="evening">{t("form.evening")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="b-name">{t("form.name")}</Label>
                      <Input id="b-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="b-phone">{t("form.phone")}</Label>
                      <Input id="b-phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="b-email">{t("form.email")}</Label>
                    <Input id="b-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="b-msg">{t("form.message")}</Label>
                    <Textarea id="b-msg" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <Button type="submit" className="w-full rounded-full gap-2 bg-[#25D366] text-white hover:bg-[#1ebe57]"><MessageCircle className="size-4" /> {t("form.submit")} <ArrowRight className="size-4" /></Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <Badge variant="secondary" className="rounded-full">{lang === "hi" ? "तैयार मैसेज" : "Pre-filled message"}</Badge>
                <pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-secondary/40 p-4 text-xs leading-relaxed">{summary}</pre>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-3 p-6">
                <div className="flex items-center gap-2 text-leaf"><Calendar className="size-5" /><h3 className="font-display text-lg font-semibold tracking-tight">{lang === "hi" ? "खुलने का समय" : "Opening hours"}</h3></div>
                {CLINIC.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm border-b pb-1.5 last:border-0">
                    <span className="font-medium">{t(`day.${h.day}`)}</span>
                    <span className="text-muted-foreground tabular-nums"><Clock className="mr-1 inline size-3" /> {h.open} – {h.close}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
