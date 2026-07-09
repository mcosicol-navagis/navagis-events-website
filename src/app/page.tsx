import HeroSection from "@/components/sections/HeroSection";
import RegisterForm from "@/components/sections/RegisterForm";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SessionsSection from "@/components/sections/SessionsSection";
import CTASection from "@/components/sections/CTASection";
import CountdownSection from "@/components/sections/CountdownSection";

export default function HomePage() {
  return (
    <>
      <section
        id="register"
        className="min-h-screen max-w-[100%] flex items-center justify-center px-4 sm:px-6 py-12 lg:py-16 relative overflow-x-hidden"
        // style={{
        //   background:
        //     "radial-gradient(ellipse 80% 80% at 0% 0%, #cfe0f5 0%, #e8f2fb 30%, #ffffff 65%)",
        // }}
      >
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div data-aos="fade-right">
            <HeroSection />
          </div>
          <div data-aos="fade-left" data-aos-delay="100">
            <RegisterForm />
          </div>
        </div>
      </section>
      <div data-aos="fade-up">
        <AboutSection />
      </div>
      <div data-aos="fade-up">
        <BenefitsSection />
      </div>
      <div data-aos="fade-up">
        <SessionsSection />
      </div>
      <div data-aos="fade-up">
        <CTASection />
      </div>
      <div data-aos="fade-up">
        <CountdownSection />
      </div>
    </>
  );
}
