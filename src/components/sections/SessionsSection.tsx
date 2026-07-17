export default function SessionsSection() {
  return (
    <section className="relative w-full ">
      {/* Background video */}
      <video
        src="/assets/videos/Office_Tour_Section_Optimized.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Blue-to-red gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-[40%]" />

      {/* Content */}
      <div className="relative z-10 py-20 px-5 sm:py-32 sm:px-6 text-center text-white max-w-4xl mx-auto">
        <h2
          data-aos="fade-right"
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 leading-tight"
        >
          Exclusive Google Chicago
          <br />
          Office Tour
        </h2>
        <p
          data-aos="fade-right"
          className="text-white text-xl leading-relaxed max-w-3xl mx-auto"
        >
          Join us right after the main event for a behind-the-scenes tour of
          Google&apos;s 350,000-square-foot Chicago office, located in the
          vibrant Fulton Market District.
        </p>
      </div>
    </section>
  );
}
