export default function SessionsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background video */}
      <video
        src="/assets/videos/Office_Tour_Section.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue-to-red gradient overlay */}
      <div
        className="absolute inset-0 opacity-[85%]"
        style={{
          background:
            "linear-gradient(to right, rgba(45, 130, 247, 1), rgba(246, 73, 79, 1) )",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-14 px-5 sm:py-20 sm:px-6 text-center text-white max-w-4xl mx-auto">
        <span className="inline-block border border-white/60 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 sm:mb-8">
          Sessions
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 leading-tight">
          Exclusive Google Chicago
          <br />
          Office Tour
        </h2>
        <p className="text-white text-xl leading-relaxed max-w-3xl mx-auto">
          Join us right after the main event for a behind-the-scenes tour of
          Google&apos;s 350,000-square-foot Chicago office, located in the
          vibrant Fulton Market District.
        </p>
      </div>
    </section>
  );
}
