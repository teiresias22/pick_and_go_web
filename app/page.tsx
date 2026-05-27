import { Download } from "@/components/Download";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { HomeJsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Faq />
        <Download />
      </main>
      <SiteFooter />
    </>
  );
}
