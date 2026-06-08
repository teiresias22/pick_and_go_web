const FALLBACK_URL = "https://pickngo-9a4f1.web.app";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_URL;
  const cleaned = raw.replace(/\/$/, "");
  try {
    new URL(cleaned);
    return cleaned;
  } catch {
    return FALLBACK_URL;
  }
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Pick and Go";

export const SITE_TAGLINE = "계획 없는 즐거움, 검증된 우연";

export const SITE_DESCRIPTION =
  "Pick and Go는 사용자의 위치·이동수단·시간을 분석해 실행 가능한 랜덤 여행 코스를 게임처럼 추천하는 모바일 앱입니다. 룰렛·사다리·카드·스크래치·로또볼 5가지 게임으로 결정 과정의 설렘을 더하고, 다녀온 코스는 도장첩에 기록할 수 있습니다.";

export const SITE_KEYWORDS = [
  "Pick and Go",
  "픽앤고",
  "랜덤 여행",
  "랜덤 코스",
  "여행 추천 앱",
  "데이트 코스 추천",
  "지하철 여행",
  "버스 여행",
  "룰렛 추첨",
  "사다리 타기",
  "랜덤 데이트",
  "오늘 뭐하지",
  "주말 나들이",
  "당일치기 여행",
  "여행 도장 깨기",
  "다녀온 곳 기록",
];

export const APP_AVAILABILITY = {
  ios: { status: "ComingSoon" as const },
  android: { status: "ComingSoon" as const },
};
