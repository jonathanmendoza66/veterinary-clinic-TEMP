import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/links";
import { useI18n } from "@/lib/i18n";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  className?: string;
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "default" | "outline" | "secondary" | "ghost";
  fullWidth?: boolean;
  label?: string;
};

const DEFAULT_MESSAGE_EN = "Hi Verdant Paws, I'd like to book an appointment for my pet.";
const DEFAULT_MESSAGE_HI = "नमस्ते Verdant Paws, मैं अपने पालतू के लिए अपॉइंटमेंट बुक करना चाहूंगा/चाहूंगी।";

export function WhatsAppButton({ message, className, size = "default", variant = "default", fullWidth, label }: Props) {
  const { lang, t } = useI18n();
  const finalMessage = message ?? (lang === "hi" ? DEFAULT_MESSAGE_HI : DEFAULT_MESSAGE_EN);
  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn("rounded-full gap-2", fullWidth && "w-full", className)}
    >
      <a href={whatsappLink(finalMessage)} target="_blank" rel="noreferrer">
        <MessageCircle className="size-4" />
        <span>{label ?? t("cta.book")}</span>
      </a>
    </Button>
  );
}
