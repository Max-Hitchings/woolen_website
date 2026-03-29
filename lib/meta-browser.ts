"use client";

type FbqFunction = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: FbqFunction;
  }
}

function getFbq() {
  if (typeof window === "undefined") {
    return undefined;
  }

  return window.fbq;
}

export function trackMetaPageView() {
  getFbq()?.("track", "PageView");
}

export function trackMetaLead(eventId: string) {
  getFbq()?.(
    "track",
    "Lead",
    {
      content_name: "Sauna Hat Waitlist",
      content_category: "Waitlist",
    },
    { eventID: eventId }
  );
}

export function persistMetaClickId(search: string) {
  if (typeof document === "undefined") {
    return;
  }

  const params = new URLSearchParams(search);
  const fbclid = params.get("fbclid");

  if (!fbclid) {
    return;
  }

  const existingCookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("_fbc="));

  if (existingCookie) {
    return;
  }

  const fbc = `fb.1.${Date.now()}.${fbclid}`;
  const maxAge = 60 * 60 * 24 * 90;

  document.cookie = `_fbc=${fbc}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}
