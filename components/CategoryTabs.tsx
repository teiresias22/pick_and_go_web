"use client";

import Image from "next/image";
import { useState } from "react";

export type CategoryItem = { src: string; label: string };
export type Category = {
  key: string;
  title: string;
  emoji: string;
  description: string;
  items: CategoryItem[];
};

export const CATEGORIES: Category[] = [
  {
    key: "transport",
    title: "이동수단",
    emoji: "🚇",
    description: "지하철 / 버스 중에서 오늘의 발걸음을 골라요.",
    items: [
      { src: "/images/logo_subway.png", label: "지하철" },
      { src: "/images/logo_bus.png", label: "버스" },
    ],
  },
  {
    key: "food",
    title: "음식",
    emoji: "🍱",
    description: "9가지 카테고리에서 오늘의 식사를 추첨해요.",
    items: [
      { src: "/images/food_korean.png", label: "한식" },
      { src: "/images/food_japanese.png", label: "일식" },
      { src: "/images/food_chinese.png", label: "중식" },
      { src: "/images/food_western.png", label: "양식" },
      { src: "/images/food_snack.png", label: "분식" },
      { src: "/images/food_vietnamese.png", label: "동남아식" },
      { src: "/images/food_indian.png", label: "인도식" },
      { src: "/images/food_mexican.png", label: "멕시칸" },
      { src: "/images/food_bbq.png", label: "고기" },
    ],
  },
  {
    key: "dessert",
    title: "디저트",
    emoji: "🧁",
    description: "달콤 한 잔, 또는 한 입.",
    items: [
      { src: "/images/dessert_coffee.png", label: "커피/카페" },
      { src: "/images/dessert_bakery.png", label: "베이커리" },
      { src: "/images/dessert_ice_cream.png", label: "아이스크림" },
      { src: "/images/dessert_fruit.png", label: "과일" },
      { src: "/images/dessert_korean_sweets.png", label: "떡/한과" },
      { src: "/images/dessert_bar.png", label: "알콜/바" },
    ],
  },
  {
    key: "activity",
    title: "할일",
    emoji: "🎯",
    description: "오늘의 즐길거리를 게임으로 뽑아요.",
    items: [
      { src: "/images/activity_cinema.png", label: "영화관람" },
      { src: "/images/activity_sing.png", label: "노래방" },
      { src: "/images/activity_pcgame.png", label: "게임방" },
      { src: "/images/activity_boardgame.png", label: "보드게임" },
      { src: "/images/activity_bowling.png", label: "볼링" },
      { src: "/images/activity_billiards.png", label: "당구" },
      { src: "/images/activity_book.png", label: "북카페" },
      { src: "/images/activity_exhibition.png", label: "전시회" },
      { src: "/images/activity_hiking.png", label: "트래킹" },
      { src: "/images/activity_pool.png", label: "찜질방" },
    ],
  },
];

export function CategoryTabs() {
  const [activeKey, setActiveKey] = useState(CATEGORIES[0].key);
  const active = CATEGORIES.find((c) => c.key === activeKey) ?? CATEGORIES[0];

  return (
    <div className="rounded-card border border-brand-outline/50 bg-white shadow-card overflow-hidden">
      <div
        role="tablist"
        aria-label="추첨 카테고리"
        className="grid grid-cols-4 gap-1 p-1.5 bg-brand-primaryContainer/30"
      >
        {CATEGORIES.map((c) => {
          const isActive = c.key === activeKey;
          return (
            <button
              key={c.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${c.key}`}
              id={`tab-${c.key}`}
              onClick={() => setActiveKey(c.key)}
              className={[
                "rounded-xl px-2 py-2 text-sm font-semibold transition-all",
                "flex flex-col items-center gap-0.5",
                isActive
                  ? "bg-white text-brand-primary shadow-soft"
                  : "text-brand-onSurface/65 hover:text-brand-onPrimaryContainer",
              ].join(" ")}
            >
              <span className="text-base leading-none" aria-hidden>
                {c.emoji}
              </span>
              <span>{c.title}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`tabpanel-${active.key}`}
        aria-labelledby={`tab-${active.key}`}
        className="p-5 sm:p-6"
      >
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold text-brand-onPrimaryContainer">
            {active.title}
          </h3>
          <span className="text-xs text-brand-onSurface/55">
            {active.items.length}개 항목
          </span>
        </div>
        <p className="mt-1 text-sm text-brand-onSurface/65">{active.description}</p>

        <ul className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2.5">
          {active.items.map((item) => (
            <li
              key={item.label}
              className="aspect-square rounded-xl bg-brand-primaryContainer/30 border border-brand-outline/30 p-2 flex flex-col items-center justify-center"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={64}
                height={64}
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
              <span className="mt-1 text-[11px] sm:text-xs text-brand-onSurface/75 text-center leading-tight">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
