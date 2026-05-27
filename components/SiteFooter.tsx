import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-outline/40 bg-white/60">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/branding/app_icon.png"
              alt=""
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-brand-onPrimaryContainer">Pick and Go</span>
          </div>
          <p className="mt-3 text-sm text-brand-onSurface/65 leading-relaxed">
            계획 없는 즐거움, 검증된 우연.
            <br />
            오늘의 모험을 게임처럼 결정해보세요.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-onSurface/60">
            서비스
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-onSurface/75">
            <li><a href="/#features" className="hover:text-brand-primary">기능 소개</a></li>
            <li><a href="/#how" className="hover:text-brand-primary">이용 방법</a></li>
            <li><a href="/#download" className="hover:text-brand-primary">다운로드</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-onSurface/60">
            안내
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-onSurface/75">
            <li>
              <Link href="/terms" className="hover:text-brand-primary">
                서비스 이용약관
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-outline/40">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-brand-onSurface/55 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Pick and Go. All rights reserved.</span>
          <span>Made with ✨ for serendipity.</span>
        </div>
      </div>
    </footer>
  );
}
