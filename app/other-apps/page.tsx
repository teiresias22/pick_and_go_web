import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OtherAppsJsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "개발자의 다른 앱",
  description:
    "Pick and Go를 만든 개발자의 다른 모바일 앱을 한 곳에서 만나보세요 — Yeowun, Color of Days, Gilmok, Time with Me.",
  alternates: { canonical: "/other-apps" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "개발자의 다른 앱 — Pick and Go",
    description:
      "같은 개발자가 만든 모바일 앱 모음 — 여행 다이어리, 무드 트래커, 커뮤니티 지도, 공유 캘린더.",
    url: "/other-apps",
    type: "website",
  },
};

type AppInfo = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  websiteUrl: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

const DEVELOPER_APPS: AppInfo[] = [
  {
    id: "pickandgo",
    name: "Pick and Go",
    tagline: "계획 없는 즐거움, 검증된 우연",
    description:
      "위치·이동수단·시간을 분석해 실행 가능한 랜덤 여행 코스를 게임처럼 추천하는 모바일 앱.",
    icon: "/branding/app_icon.png",
    websiteUrl: "/",
  },
  {
    id: "yeowun",
    name: "Yeowun (여운)",
    tagline: "AI 여행 지도 다이어리",
    description:
      "사진만 올리면 AI가 자동으로 여행 경로를 완성합니다. 도시 뱃지 수집, 친구와 지도 공유.",
    icon: "https://trace-line-7fc12.web.app/logo.png",
    websiteUrl: "https://trace-line-7fc12.web.app",
    appStoreUrl: "https://apps.apple.com/app/id6759911276",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.traceline.joon.trace_line",
  },
  {
    id: "colorofdays",
    name: "Color of Days",
    tagline: "하루를 색으로 기록하는 무드 다이어리",
    description:
      "매일의 감정을 색으로 표현하고 캘린더에 채워나가는 나만의 무드 트래커.",
    icon: "https://color-of-days.web.app/assets/appicon.png",
    websiteUrl: "https://color-of-days.web.app",
    appStoreUrl: "https://apps.apple.com/app/id6443436725",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.colorofdays.color_of_days",
  },
  {
    id: "gilmok",
    name: "Gilmok (길목)",
    tagline: "나만의 장소를 기록하는 커뮤니티 지도",
    description:
      "숨겨진 장소를 지도에 기록하고 다른 여행자와 공유하는 커뮤니티 지도 서비스.",
    icon: "https://way-archive.web.app/logo.png",
    websiteUrl: "https://way-archive.web.app",
    appStoreUrl: "https://apps.apple.com/app/id6761645899",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.wayArchive.joonhwan.way_archive",
  },
  {
    id: "timewithme",
    name: "Time with Me",
    tagline: "소중한 사람과 함께 쓰는 공유 캘린더",
    description:
      "연인·가족과 일정을 공유하고 소통하는 커플/패밀리 캘린더 앱.",
    icon: "https://time-with-me-745b5.web.app/assets/appicon.png",
    websiteUrl: "https://time-with-me-745b5.web.app",
    appStoreUrl: "https://apps.apple.com/app/id6705135769",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.joonhwan.timewithme.time_with_me",
  },
];

const CURRENT_APP_ID = "pickandgo";

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M16.5 12.7c0-2.46 2-3.64 2.09-3.7-1.14-1.67-2.91-1.9-3.54-1.93-1.5-.15-2.93.88-3.7.88-.76 0-1.93-.86-3.18-.84-1.63.02-3.14.95-3.98 2.41-1.7 2.95-.43 7.31 1.22 9.7.81 1.17 1.78 2.49 3.04 2.45 1.22-.05 1.68-.79 3.16-.79 1.47 0 1.9.79 3.19.76 1.32-.02 2.15-1.19 2.96-2.37.93-1.37 1.32-2.7 1.33-2.77-.03-.01-2.55-.98-2.59-3.8ZM14.1 5.06c.66-.8 1.1-1.92.98-3.06-.95.04-2.11.64-2.8 1.45-.62.71-1.16 1.86-1.02 2.96 1.06.08 2.16-.54 2.84-1.35Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M3.61 1.5a1.5 1.5 0 0 0-.61 1.21v18.58a1.5 1.5 0 0 0 .61 1.21l10.7-10.5L3.61 1.5Zm12.07 9.6L5.8 1.4 17.43 8.1l-1.75 3Zm4.95 2.86-3.06 1.77-2.16-1.93 2.16-1.93 3.06 1.77a1 1 0 0 1 0 1.74ZM5.8 22.6l9.88-9.7 1.75 3L5.8 22.6Z" />
    </svg>
  );
}

export default function OtherAppsPage() {
  return (
    <>
      <OtherAppsJsonLd />
      <SiteHeader />
      <main className="bg-grain">
        <section className="mx-auto max-w-3xl px-5 pt-14 pb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-brand-onSurface/60 hover:text-brand-primary"
          >
            ← 홈으로
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-brand-onPrimaryContainer">
            개발자의 다른 앱
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-onSurface/70">
            같은 개발자가 만든 앱들을 소개합니다.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-5 pb-24">
          <div className="flex flex-col gap-5">
            {DEVELOPER_APPS.map((app) => {
              const isCurrent = app.id === CURRENT_APP_ID;
              return (
                <article
                  key={app.id}
                  className={`relative rounded-card border p-6 transition-shadow hover:shadow-card ${
                    isCurrent
                      ? "border-brand-primary bg-brand-primaryContainer/40"
                      : "border-brand-outline/60 bg-white/90"
                  }`}
                >
                  {isCurrent && (
                    <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-brand-primary px-2.5 py-1 text-[11px] font-semibold text-brand-onPrimary tracking-wide">
                      현재 앱
                    </span>
                  )}

                  <div className="flex gap-4">
                    <Image
                      src={app.icon}
                      alt={`${app.name} 앱 아이콘`}
                      width={64}
                      height={64}
                      className="h-16 w-16 flex-shrink-0 rounded-2xl object-cover shadow-soft"
                    />
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold text-brand-onPrimaryContainer">
                        {app.name}
                      </h2>
                      <p className="mt-0.5 text-sm font-medium text-brand-primary">
                        {app.tagline}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-onSurface/75">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand-outline/60 bg-brand-surfaceHighest/60 px-3 py-1.5 text-sm font-medium text-brand-onSurface/80 transition-opacity hover:opacity-80"
                      >
                        <AppStoreIcon />
                        App Store
                      </a>
                    )}
                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand-outline/60 bg-brand-surfaceHighest/60 px-3 py-1.5 text-sm font-medium text-brand-onSurface/80 transition-opacity hover:opacity-80"
                      >
                        <GooglePlayIcon />
                        Google Play
                      </a>
                    )}
                    {!isCurrent && (
                      <a
                        href={app.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-sm font-medium text-brand-primary transition-opacity hover:opacity-70"
                      >
                        웹사이트 방문 →
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
