"use client";

import { logEvent } from "firebase/analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { ensureAnalytics } from "@/lib/firebase";

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const qs = searchParams?.toString();
    const pagePath = qs ? `${pathname}?${qs}` : pathname;

    ensureAnalytics().then((analytics) => {
      if (!analytics) return;
      logEvent(analytics, "page_view", {
        page_path: pagePath,
        page_location:
          typeof window !== "undefined" ? window.location.href : pagePath,
        page_title:
          typeof document !== "undefined" ? document.title : undefined,
      });
    });
  }, [pathname, searchParams]);

  return null;
}

export function FirebaseAnalytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}
