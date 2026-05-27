import Image from "next/image";

type StoreCardProps = {
  storeName: string;
  caption: string;
  badge: string;
  icon: React.ReactNode;
};

function StoreCard({ storeName, caption, badge, icon }: StoreCardProps) {
  return (
    <div
      aria-disabled
      className="group relative flex items-center gap-4 rounded-2xl border border-brand-outline/60 bg-white/90 px-5 py-4 cursor-not-allowed select-none"
      title="출시 예정"
    >
      <span className="absolute -top-2.5 left-5 inline-flex items-center rounded-full bg-brand-primary px-2.5 py-0.5 text-[10px] font-semibold text-brand-onPrimary tracking-wide">
        {badge}
      </span>
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-onSurface text-white">
        {icon}
      </span>
      <span className="text-left">
        <span className="block text-[11px] uppercase tracking-widest text-brand-onSurface/60">
          {caption}
        </span>
        <span className="block text-lg font-bold text-brand-onPrimaryContainer">
          {storeName}
        </span>
      </span>
    </div>
  );
}

export function Download() {
  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-[32px] bg-brand-primary/95 px-6 py-14 sm:px-12 sm:py-20 text-center shadow-card">
          <div className="absolute inset-0 -z-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#fff_0,transparent_45%),radial-gradient(circle_at_bottom_right,#fff_0,transparent_45%)]" />
          <Image
            src="/branding/character.png"
            alt=""
            width={88}
            height={88}
            className="mx-auto rounded-2xl bg-white/30 p-2 backdrop-blur"
          />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            곧 만나요, Pick and Go.
          </h2>
          <p className="mt-4 text-white/85 leading-relaxed max-w-xl mx-auto">
            iOS와 Android 양 플랫폼 동시 출시를 준비 중입니다.
            아래 스토어 배지에 곧 다운로드 링크가 연결돼요.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <StoreCard
              caption="GET IT ON"
              storeName="Google Play"
              badge="출시 예정"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M3.61 1.5a1.5 1.5 0 0 0-.61 1.21v18.58a1.5 1.5 0 0 0 .61 1.21l10.7-10.5L3.61 1.5Zm12.07 9.6L5.8 1.4 17.43 8.1l-1.75 3Zm4.95 2.86-3.06 1.77-2.16-1.93 2.16-1.93 3.06 1.77a1 1 0 0 1 0 1.74ZM5.8 22.6l9.88-9.7 1.75 3L5.8 22.6Z" />
                </svg>
              }
            />
            <StoreCard
              caption="Download on the"
              storeName="App Store"
              badge="출시 예정"
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M16.5 12.7c0-2.46 2-3.64 2.09-3.7-1.14-1.67-2.91-1.9-3.54-1.93-1.5-.15-2.93.88-3.7.88-.76 0-1.93-.86-3.18-.84-1.63.02-3.14.95-3.98 2.41-1.7 2.95-.43 7.31 1.22 9.7.81 1.17 1.78 2.49 3.04 2.45 1.22-.05 1.68-.79 3.16-.79 1.47 0 1.9.79 3.19.76 1.32-.02 2.15-1.19 2.96-2.37.93-1.37 1.32-2.7 1.33-2.77-.03-.01-2.55-.98-2.59-3.8ZM14.1 5.06c.66-.8 1.1-1.92.98-3.06-.95.04-2.11.64-2.8 1.45-.62.71-1.16 1.86-1.02 2.96 1.06.08 2.16-.54 2.84-1.35Z" />
                </svg>
              }
            />
          </div>
          <p className="mt-6 text-xs text-white/70">
            * 스토어 링크는 출시와 동시에 활성화됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
