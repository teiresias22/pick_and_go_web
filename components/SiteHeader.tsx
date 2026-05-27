import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-brand-surface/80 border-b border-brand-outline/40">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/branding/app_icon.png"
            alt="Pick and Go"
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="font-bold text-lg tracking-tight text-brand-onPrimaryContainer">
            Pick and Go
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-7 text-sm text-brand-onSurface/80">
          <a href="#features" className="hover:text-brand-primary transition-colors">
            기능 소개
          </a>
          <a href="#how" className="hover:text-brand-primary transition-colors">
            이용 방법
          </a>
          <a href="#faq" className="hover:text-brand-primary transition-colors">
            FAQ
          </a>
          <a href="#download" className="hover:text-brand-primary transition-colors">
            다운로드
          </a>
        </nav>
        <a
          href="#download"
          className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-onPrimary shadow-soft hover:brightness-105 transition"
        >
          앱 받기
        </a>
      </div>
    </header>
  );
}
