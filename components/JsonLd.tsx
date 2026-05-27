import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomeJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/branding/app_icon.png`,
    sameAs: [] as string[],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "ko-KR",
    description: SITE_DESCRIPTION,
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE_NAME,
    operatingSystem: "iOS, Android",
    applicationCategory: "TravelApplication",
    applicationSubCategory: "Lifestyle",
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
    inLanguage: "ko-KR",
    countriesSupported: "KR",
    availableOnDevice: "iOS, Android",
    releaseNotes: "출시 예정 — iOS App Store, Google Play 동시 출시 준비 중.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
      availability: "https://schema.org/PreOrder",
    },
    featureList: [
      "위치·이동수단 기반 랜덤 코스 추천",
      "목적지·음식·디저트·할일 4개 슬롯 추첨",
      "룰렛·사다리·카드 뽑기 게임형 결정 UI",
      "유효성 검증 — 운행 가능 노선, 환승 가능성, 위험 지역 제외",
      "Kakao Maps / NAVER Maps 길 안내 연동",
      "하루 5회 무료 추첨, 광고 시청으로 추가 3회 충전",
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Pick and Go는 어떤 앱인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pick and Go는 사용자의 현재 위치, 이동수단(지하철·버스), 사용 가능한 시간을 기반으로 도달 가능한 랜덤 여행 코스를 추천하는 모바일 앱입니다. 단순 무작위가 아닌, 운행 가능 노선과 환승 가능성을 검증한 결과만 제공합니다.",
        },
      },
      {
        "@type": "Question",
        name: "어떤 이동수단을 지원하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "지하철과 버스를 지원합니다. 지하철은 Short / Mid / Long 3단계 강도로 직통 노선과 환승 가능 노선을 모두 후보로 포함하며, 버스는 5km / 10km / 무제한 반경 내에서 추첨합니다.",
        },
      },
      {
        "@type": "Question",
        name: "코스 카드는 무엇으로 구성되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "코스 카드는 목적지, 음식, 디저트, 할일 4개 슬롯으로 구성됩니다. 사용자는 원하는 순서로 슬롯을 탭하여 룰렛·사다리·카드 뽑기 중 하나의 게임 UI로 각 슬롯을 추첨할 수 있고, 마음에 들지 않으면 그 슬롯만 재추첨할 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "무료로 몇 번까지 추첨할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "하루 5회까지 무료로 추첨할 수 있습니다. 5회를 모두 사용한 뒤에는 광고 한 편을 시청하면 추첨 횟수가 3회 추가 충전됩니다. 횟수는 매일 자정에 다시 5회로 초기화됩니다.",
        },
      },
      {
        "@type": "Question",
        name: "어떤 지역에서 사용할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "수도권, 부산, 대구, 대전, 광주 등 한국 주요 광역 지역을 지원합니다. 위치 권한을 허용하면 GPS 좌표로 지역을 자동 추정하고, 거부하면 수도권을 기본값으로 사용합니다.",
        },
      },
      {
        "@type": "Question",
        name: "iOS와 Android에서 모두 사용할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네. Pick and Go는 Flutter로 개발되어 iOS와 Android 양 플랫폼에 동시 출시될 예정입니다. 현재는 출시 준비 중이며, App Store와 Google Play 다운로드 링크는 출시와 동시에 이 페이지에 연결됩니다.",
        },
      },
      {
        "@type": "Question",
        name: "추첨 결과는 정말 갈 수 있는 곳만 나오나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pick and Go는 단순 무작위 추첨이 아닌 2단계 유효성 검증을 거칩니다. 1단계 필터링에서는 사용자가 선택한 출발역 기준 가용 노선과 환승 가능 노선을 도출하고, 2단계 랜덤 엔진에서는 난이도별 거리 범위 안의 후보 중에서만 결과를 뽑습니다. 야간 위험 지역도 함께 검증합니다. (단, 첫차·막차 시간표는 검증 대상에서 제외되므로 운행 시간은 직접 확인해 주세요.)",
        },
      },
    ],
  };

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={website} />
      <JsonLdScript data={softwareApp} />
      <JsonLdScript data={faq} />
    </>
  );
}

export function TermsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "서비스 이용약관",
    url: `${SITE_URL}/terms`,
    inLanguage: "ko-KR",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    about: { "@type": "Thing", name: "Pick and Go 서비스 이용약관" },
  };
  return <JsonLdScript data={data} />;
}

export function OtherAppsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "개발자의 다른 앱",
    url: `${SITE_URL}/other-apps`,
    inLanguage: "ko-KR",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    about: {
      "@type": "Thing",
      name: "Pick and Go 개발자가 만든 다른 모바일 앱 모음",
    },
  };
  return <JsonLdScript data={data} />;
}
