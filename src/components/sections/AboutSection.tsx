export default function AboutSection() {
  return (
    <section className="py-12 px-4 sm:px-6 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Video */}
        <div className="w-full rounded-3xl overflow-hidden shadow-lg">
          <video
            src="/assets/videos/event2.mp4"
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
          <h2
            data-aos="fade-right"
            className="text-4xl md:text-5xl text-center lg:text-left font-bold text-slate-900 leading-tight mb-6"
          >
            Stop Guessing. <br /> Start Predicting <br /> & Grow.
          </h2>
          <p
            data-aos="fade-right"
            className="text-[#1B1B1C] md:max-w-[80%] text-center mx-auto lg:mx-0 lg:text-left text-xl leading-relaxed"
          >
            Join Google Maps Platform and Navagis for an exclusive, in-person
            event to move beyond descriptive analytics and static spreadsheets.
            Discover how to bridge the gap between historical data and future
            trends by visually mapping your real-world context and applying
            AI-powered location intelligence directly to your industry's biggest
            challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
