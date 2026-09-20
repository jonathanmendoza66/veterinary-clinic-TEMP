import { CLINIC } from "./content";

export function whatsappLink(message: string) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink(number: string = CLINIC.phone) {
  return `tel:${number.replace(/\s/g, "")}`;
}

export function mailLink(email: string, subject?: string) {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${params}`;
}

export function todayHours() {
  const now = new Date();
  const dayIdx = (now.getDay() + 6) % 7;
  return CLINIC.hours[dayIdx];
}

export function isOpenNow() {
  const now = new Date();
  const today = todayHours();
  if (!today) return false;
  const parse = (s: string) => {
    const m = s.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!m) return 0;
    let h = parseInt(m[1], 10);
    const min = parseInt(m[2], 10);
    if (/PM/i.test(m[3]) && h !== 12) h += 12;
    if (/AM/i.test(m[3]) && h === 12) h = 0;
    return h * 60 + min;
  };
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= parse(today.open) && minutes < parse(today.close);
}
