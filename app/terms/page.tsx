import type { Metadata } from "next";
import Link from "next/link";
import { TermsJsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "서비스 이용약관",
  description:
    "Pick and Go 모바일 앱의 서비스 이용약관 — 서비스 내용, 위치 정보 처리, 면책 조항, 약관 변경 절차 등을 명시합니다.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "서비스 이용약관 — Pick and Go",
    description:
      "Pick and Go 모바일 앱의 서비스 이용약관 — 서비스 내용, 위치 정보 처리, 면책 조항, 약관 변경 절차 등을 명시합니다.",
    url: "/terms",
    type: "article",
  },
};

const LAST_UPDATED = "2026년 5월";

type Article = {
  id: string;
  title: string;
  body: string;
};

const ARTICLES: Article[] = [
  {
    id: "article-1",
    title: "제1조 (목적)",
    body:
      '본 약관은 Pick and Go(이하 "앱")가 제공하는 랜덤 여행 코스 추천 서비스(이하 "서비스")의 이용에 관한 조건과 절차, 이용자와 앱의 권리·의무 및 책임사항 등을 규정함을 목적으로 합니다.',
  },
  {
    id: "article-2",
    title: "제2조 (서비스 내용)",
    body:
      "앱은 사용자의 현재 위치·이동수단·시간 조건을 바탕으로 랜덤 여행 코스(목적지, 식사, 디저트, 즐길거리)를 제안하는 서비스를 제공합니다. 추첨은 세션당 5회 무료로 제공되며, 초과 시 광고 시청이 필요합니다.",
  },
  {
    id: "article-3",
    title: "제3조 (위치 정보의 수집 및 이용)",
    body:
      "앱은 서비스 제공을 위해 기기의 위치 정보를 수집할 수 있습니다. 위치 정보는 오직 현재 위치 기반 코스 추천에만 사용되며, 서버에 저장·전송되지 않습니다. 위치 정보 수집에 동의하지 않더라도 위치 정보 없이 서비스를 이용할 수 있습니다.",
  },
  {
    id: "article-4",
    title: "제4조 (앱 사용 제한)",
    body:
      "앱은 다음 각 호의 경우에 해당하는 이용자에 대해 서비스 이용을 제한할 수 있습니다.\n1. 서비스 운영을 고의로 방해한 경우\n2. 타인의 정보를 도용하거나 불법적으로 사용한 경우\n3. 앱 또는 서비스를 역공학, 변조, 위변조하려는 경우",
  },
  {
    id: "article-5",
    title: "제5조 (면책 조항)",
    body:
      "앱은 제안된 여행 코스의 영업 상태, 운행 현황, 안전 여부에 대해 보증하지 않습니다. 코스 방문·이동 중 발생하는 사고, 손실, 피해에 대해 앱은 법적으로 허용되는 최대 범위에서 책임을 지지 않습니다. 공공 교통 정보는 실시간 변동이 있을 수 있으므로 반드시 실제 운행 정보를 확인하시기 바랍니다.",
  },
  {
    id: "article-6",
    title: "제6조 (약관의 변경)",
    body:
      "앱은 관련 법령 또는 서비스 정책에 따라 본 약관을 변경할 수 있습니다. 변경된 약관은 앱 내 공지를 통해 안내되며, 변경 이후에도 서비스를 계속 이용하면 변경된 약관에 동의한 것으로 간주됩니다.",
  },
  {
    id: "article-7",
    title: "제7조 (준거법 및 분쟁 해결)",
    body:
      "본 약관은 대한민국 법령에 따라 해석·적용되며, 서비스 이용과 관련하여 분쟁이 발생할 경우 관할 법원은 민사소송법에 의한 법원으로 합니다.",
  },
];

export default function TermsPage() {
  return (
    <>
      <TermsJsonLd />
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
            Pick and Go 서비스 이용약관
          </h1>
          <p className="mt-3 text-sm text-brand-onSurface/65">
            최종 업데이트: {LAST_UPDATED}
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-5 pb-24">
          <div className="space-y-8 text-[15px] leading-relaxed text-brand-onSurface/85">
            {ARTICLES.map((a) => (
              <article key={a.id} id={a.id} className="scroll-mt-24">
                <h2 className="text-base font-semibold text-brand-onPrimaryContainer">
                  {a.title}
                </h2>
                <p className="mt-2 whitespace-pre-line">{a.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
