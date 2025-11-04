import type { FunctionComponent, SVGProps } from "react";
import type { supportedLngs } from "./i18n";

import EnglishIcon from "@/shared/assets/icons/English.svg?react";
import GermanyIcon from "@/shared/assets/icons/German.svg?react";

export type SupportLngsType = (typeof supportedLngs)[number];

type LanguageIconList = Record<
  SupportLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconList = {
  en: EnglishIcon,
  de: GermanyIcon,
}
