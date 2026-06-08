import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grain">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-24 sm:pb-28 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-primaryContainer px-3.5 py-1.5 text-xs font-semibold text-brand-onPrimaryContainer">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            출시 예정 · iOS &amp; Android
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-onPrimaryContainer leading-[1.15]">
            계획 없는 즐거움,
            <br />
            <span className="text-brand-primary">검증된 우연.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-onSurface/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
            지금 내 위치, 이동수단, 남은 시간으로 떠날 수 있는 가장 즐거운
            랜덤 코스. 룰렛·사다리·카드 등 5가지 게임으로 결정 과정의
            설렘까지 챙기는 Gamification 여행 앱.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-onPrimary shadow-card hover:brightness-105 transition"
            >
              앱 다운로드
              <span aria-hidden>→</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-brand-outline bg-white px-6 py-3 text-sm font-semibold text-brand-onSurface hover:bg-brand-primaryContainer/40 transition"
            >
              어떻게 작동하나요?
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            <Stat label="이동수단" value="2종" />
            <Stat label="추첨 슬롯" value="4개" />
            <Stat label="결정 게임" value="5가지" />
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-primaryContainer via-white to-brand-tertiaryContainer blur-2xl opacity-70" />
          <div className="relative rounded-[36px] border border-brand-outline/50 bg-white shadow-card p-8 sm:p-10">
            <Image
              src="/images/logo.png"
              alt="Pick and Go 캐릭터 — 지도를 보는 고양이"
              width={520}
              height={520}
              className="mx-auto w-full h-auto"
              priority
            />
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-brand-onSurface/70">
              <Image
                src="/branding/character.png"
                alt=""
                width={36}
                height={36}
                className="rounded-full"
              />
              <span>
                <span className="font-semibold text-brand-onPrimaryContainer">오늘은 어디로?</span>
                {" "}고양이가 정해드릴게요.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/70 border border-brand-outline/40 px-3 py-3 text-center backdrop-blur">
      <dt className="text-xs text-brand-onSurface/60">{label}</dt>
      <dd className="mt-1 text-xl font-bold text-brand-onPrimaryContainer">{value}</dd>
    </div>
  );
}
