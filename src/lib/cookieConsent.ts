export type CookieConsentStatus = "accepted" | "declined";

export const COOKIE_CONSENT_KEY = "rachconcept-cookie-consent";

export function isCookieConsentStatus(value: string | null): value is CookieConsentStatus {
  return value === "accepted" || value === "declined";
}
