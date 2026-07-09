import HeroSection from "@/components/sections/HeroSection";
import RegisterForm from "@/components/sections/RegisterForm";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SessionsSection from "@/components/sections/SessionsSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import CTASection from "@/components/sections/CTASection";
import CountdownSection from "@/components/sections/CountdownSection";

export default function HomePage() {
  return (
    <>
      <section id="register" className="min-h-screen max-w-[100%] flex items-center justify-center px-6 py-16 relative overflow-x-hidden">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroSection />
          <RegisterForm />
        </div>
      </section>
      <AboutSection />
      <BenefitsSection />
      <SessionsSection />
      <SpeakersSection />
      <CTASection />
      <CountdownSection />
    </>
  );
}
