import { useI18n, type Lang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useI18n();
  const label = lang === "hi" ? "हि" : "EN";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={compact ? "icon" : "sm"}
          className="rounded-full"
          aria-label={t("nav.more")}
        >
          {compact ? (
            <Languages className="size-4" />
          ) : (
            <span className="flex items-center gap-1.5">
              <Languages className="size-4" />
              <span className="font-medium tabular-nums">{label}</span>
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(["en", "hi"] as Lang[]).map((l) => (
          <DropdownMenuItem key={l} onClick={() => setLang(l)} className={lang === l ? "bg-accent" : ""}>
            <span className="mr-2 font-mono">{l === "en" ? "EN" : "हि"}</span>
            {t(l === "en" ? "label.languageEn" : "label.languageHi")}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
