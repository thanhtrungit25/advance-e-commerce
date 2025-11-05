import { useTranslation } from "react-i18next";

import { languageIconList, type SupportLngsType } from "@/shared/config";
import { Button } from "@/shared/ui";
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";


export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as SupportLngsType;

  const toggleLanguage = () => {
    const newLng = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLng);
  };

  return (
    <Button theme="ghost" onClick={toggleLanguage}>
      <AppIcon Icon={languageIconList[currentLanguage]} />
    </Button>
  );
};
