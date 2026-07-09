export default function AboutSection() {
  return (
    <section className="py-12 px-4 sm:px-6 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Video */}
        <div className="w-full rounded-3xl overflow-hidden shadow-lg">
          <video
            src="/assets/videos/Event_Promo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full block rounded-3xl"
          />
        </div>

        {/* Text */}
        <div className="">
          <h2 className="text-4xl md:text-5xl  font-bold text-slate-900 leading-tight mb-6">
            Unlock the Real-World Context of Every Location
          </h2>
          <p className="text-[#1B1B1C] text-lg leading-relaxed">
            Most businesses have mastered their internal data, but the real
            world outside their doors remains a black box. Join the Google Maps
            Platform and Navagis teams for an exclusive, in-person event to
            bridge that gap. We will explore how combining enterprise-grade
            location intelligence with advanced cloud computing and AI can solve
            complex “where” and “why” questions across your business. Learn how
            to turn location data into strategic alpha and stop guessing where
            to grow.
          </p>
        </div>
      </div>
    </section>
  );
}
