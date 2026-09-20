import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Home } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function NotFoundPage() {
  const { lang } = useI18n();
  return (
    <div className="relative min-h-[70vh] overflow-hidden">
      <div aria-hidden className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <div className="font-display text-7xl font-semibold tracking-tight text-leaf md:text-9xl">404</div>
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {lang === "hi" ? "यह पन्ना घूमने निकल गया" : "This page wandered off"}
        </h1>
        <p className="max-w-md text-muted-foreground">
          {lang === "hi" ? "जो आप ढूँढ रहे हैं वह यहाँ नहीं है। चलिए घर वापस चलते हैं।" : "We couldn't find what you were looking for. Let's head back home."}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <Button asChild className="rounded-full gap-2"><Link to="/"><Home className="size-4" /> {lang === "hi" ? "होम पर जाएं" : "Go home"}</Link></Button>
          <WhatsAppButton variant="outline" />
        </div>
      </div>
    </div>
  );
}
