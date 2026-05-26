import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Features />
      <CallToAction />
      <FooterSection />
    </main>
  );
}
