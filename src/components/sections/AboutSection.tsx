import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="flex gap-4 h-[520px]">
          {/* pic1 — full-height left */}
          <div className="flex-1 h-[70%] mt-[15%] relative rounded-3xl overflow-hidden">
            <Image
              src="/assets/images/pic1.jpg"
              alt="Aerial highway"
              fill
              className="object-cover"
            />
          </div>

          {/* pic2 + pic3 — stacked right */}
          <div className="flex flex-col gap-4 w-[45%]">
            <div className="flex-1 relative rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/pic2.jpg"
                alt="Navigation on phone"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 relative rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/pic3.jpg"
                alt="Globe with network"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Unlock the Real-World Context of Every Location
          </h2>
          <p className="text-[#424753] text-lg leading-relaxed">
            Most businesses have mastered their internal data, but the real
            world outside their doors remains a black box. Join the Google Maps
            Platform and Navagis teams for an exclusive, in-person event to
            bridge that gap. We will explore how combining enterprise-grade
            location intelligence with advanced cloud computing and AI can solve
            complex &ldquo;where&rdquo; and &ldquo;why&rdquo; questions across
            your business. Learn how to turn location data into strategic alpha
            and stop guessing where to grow.
          </p>
        </div>
      </div>
    </section>
  );
}
