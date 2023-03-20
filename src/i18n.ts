// @ts-ignore
import { createI18n } from 'vue-i18n'
import en from '@/assets/locales/en.json'
import de from '@/assets/locales/de.json'
import { AllLocales } from "@/models/AllLocales";
import type { AllLocales as AllLocalesType } from "@/models/AllLocales";

// Create Vue I18n instance.
export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: AllLocales.EN,
  fallbackLocale: AllLocales.DE,
  messages: {
    en: en,
    de: de,
  },
})

/**
 * Set a specific locale lang file based on the passed local enum
 *
 * @param locale
 */
export async function setLocale(locale: AllLocalesType) {
  // Load locale if not available yet.
  // @ts-ignore
  if (!i18n.global.availableLocales.includes(locale)) {
    const messages = await loadLocale(locale)
    // fetch() error occurred.
    if (messages === undefined) {
      return
    }
    // Add locale.
    i18n.global.setLocaleMessage(locale, messages)
  }
  // Set locale.
  i18n.global.locale.value = locale
}
/**
 * Load a specific locale lang file based on the passed local enum
 *
 * @param locale Locales
 */
function loadLocale(locale: AllLocalesType) {
  console.log('load')
  return fetch(`./locales/${locale}.json`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Something went wrong!')
      })
      .catch((error) => {
        switch (error.response.status) {
          default:
            console.log(
                'i18n.ts no status case ' + error.response.status
            )
            break
        }
      })
}
