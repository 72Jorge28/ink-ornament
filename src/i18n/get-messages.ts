import "server-only";

import type { Locale } from "./locales";

type Messages = Record<string, string>;

const dictionaries: Record<Locale, () => Promise<Messages>> = {
  es: () => import("../../messages/es.json").then((module) => module.default),
  en: () => import("../../messages/en.json").then((module) => module.default),
};

export async function getMessages(locale: Locale) {
  return dictionaries[locale]();
}