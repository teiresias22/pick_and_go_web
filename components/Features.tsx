const FEATURES = [
  {
    emoji: "📍",
    title: "위치·이동수단 기반 코스 추천",
    desc:
      "현재 위치에서 지하철 또는 버스로 닿을 수 있는 범위를 자동 분석해, 도달 가능한 후보 안에서만 추첨합니다.",
    chip: "수도권 · 부산 · 대구 · 대전 · 광주",
  },
  {
    emoji: "🎲",
    title: "4개 슬롯, 마음대로 추첨",
    desc:
      "목적지 · 음식 · 디저트 · 할일 4개 슬롯을 자유 순서로 채워보세요. 마음에 들지 않으면 그 슬롯만 다시 뽑을 수 있어요.",
    chip: "재추첨 자유",
  },
  {
    emoji: "🎡",
    title: "결정의 재미, 5가지 게임",
    desc:
      "단순히 결과만 보여주지 않습니다. 룰렛·사다리·카드 뽑기·스크래치·로또볼 중 원하는 방식으로 추첨 과정의 설렘을 즐기세요.",
    chip: "룰렛 · 사다리 · 카드 · 스크래치 · 로또볼",
  },
  {
    emoji: "🛡️",
    title: "검증된 우연 — 도달 가능성 검증",
    desc:
      "출발지 기준 가용·환승 노선을 추려내고, 난이도별 거리 범위 안의 후보에서만 추첨합니다. 우연이지만 실제로 갈 수 있는 코스.",
    chip: "가용 노선 · 거리 범위",
  },
  {
    emoji: "⭐",
    title: "출발지 북마크",
    desc:
      "자주 쓰는 지하철역·버스 정류장을 별 토글로 저장하세요. 조건 설정 화면 상단의 즐겨찾기 칩에서 한 번에 다시 선택할 수 있어요.",
    chip: "지하철 · 버스 즐겨찾기",
  },
  {
    emoji: "🎫",
    title: "다녀온 곳 도장첩",
    desc:
      "다녀온 코스를 별점·메모와 함께 기록하면 지역·활동 도장이 점등되고 여행자 뱃지가 쌓여요. 목적지 근처에선 GPS로 자동 체크인됩니다.",
    chip: "체크인 · 도장 깨기",
  },
  {
    emoji: "🗺️",
    title: "바로 길 안내",
    desc:
      "결정된 코스는 카카오맵·네이버지도와 연결해 즉시 경로 안내로 이어집니다.",
    chip: "Kakao · NAVER",
  },
  {
    emoji: "🎁",
    title: "하루 5회 무료 추첨",
    desc:
      "매일 광고 없이 즐기는 5회의 무료 추첨. 더 뽑고 싶다면 광고 한 편으로 3회를 충전할 수 있어요.",
    chip: "광고 보고 +3회",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-primary">FEATURES</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-brand-onPrimaryContainer">
            우연을 설계하는 8가지 방법
          </h2>
          <p className="mt-4 text-brand-onSurface/70 leading-relaxed">
            Pick and Go는 단순한 랜덤 추첨이 아닙니다. 도달 가능성과 안전,
            그리고 결정의 재미까지 모두 고려한 코스 설계 서비스입니다.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="group rounded-card border border-brand-outline/50 bg-white p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primaryContainer text-2xl">
                <span aria-hidden>{f.emoji}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-onPrimaryContainer">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-brand-onSurface/70 leading-relaxed">
                {f.desc}
              </p>
              <span className="mt-5 inline-flex items-center rounded-full bg-brand-tertiaryContainer px-3 py-1 text-xs font-medium text-brand-onPrimaryContainer">
                {f.chip}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
