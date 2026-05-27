import { CategoryTabs } from "@/components/CategoryTabs";

const STEPS = [
  {
    n: "01",
    title: "조건을 정해요",
    desc: "이동수단(지하철/버스)과 강도(Short/Mid/Long), 제외할 음식·할일을 선택해요.",
  },
  {
    n: "02",
    title: "슬롯을 뽑아요",
    desc: "목적지·음식·디저트·할일 4개 슬롯을 좋아하는 게임으로 추첨해요.",
  },
  {
    n: "03",
    title: "코스 카드 완성",
    desc: "4슬롯이 채워지면 ‘오늘의 코스’ 카드가 완성되고, 길 안내로 바로 출발할 수 있어요.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="py-20 sm:py-28 bg-gradient-to-b from-brand-primaryContainer/40 to-transparent"
    >
      <div className="mx-auto max-w-6xl px-5 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold text-brand-primary">HOW IT WORKS</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-brand-onPrimaryContainer">
            세 단계로 시작하는 오늘의 모험
          </h2>
          <ol className="mt-10 space-y-6">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-5">
                <div className="flex-none h-12 w-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-onPrimaryContainer">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-onSurface/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="order-1 lg:order-2">
          <CategoryTabs />
          <p className="mt-3 text-center text-xs text-brand-onSurface/55">
            탭을 눌러 카테고리별 추첨 풀을 살펴보세요.
          </p>
        </div>
      </div>
    </section>
  );
}
