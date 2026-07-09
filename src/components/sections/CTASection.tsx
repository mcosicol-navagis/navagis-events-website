import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-50 rounded-3xl px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left — text */}
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Can&apos;t Make The Event?
            </h2>
            <p className="text-[#424753] leading-relaxed mb-8">
              We understand! Reach out to book a personalized 1-on-1
              consultation to explore how Google Maps Platform, Google Cloud,
              and AI can support your specific business needs.
            </p>
            <a
              href="#register"
              className="inline-block bg-[#0058BD] hover:bg-blue-700 text-white text-sm font-bold tracking-widest uppercase px-10 py-4 rounded-xl transition-colors"
            >
              Let&apos;s Connect!
            </a>
          </div>

          {/* Right — illustration */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-md">
            <Image
              src="/assets/images/objects.png"
              alt="Schedule a consultation"
              width={480}
              height={360}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
