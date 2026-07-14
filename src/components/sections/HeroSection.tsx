import Image from "next/image";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center">
      {/* Content — sits above the blob */}
      <div className="relative z-10 flex flex-col">
        {/* GMP logo */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="flex items-center gap-2 mb-8"
        >
          <Image
            src="/assets/images/gmp.png"
            alt="Google Maps Platform"
            width={420}
            height={30}
            className="object-contain w-full max-w-[300px] sm:max-w-[420px]"
          />
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-right"
          data-aos-delay="600"
          className="text-4xl md:text-7xl font-bold text-slate-900 leading-none mb-4"
        >
          Map the Way
          <br />
          Chicago
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-right"
          data-aos-delay="800"
          className="text-xl font-semibold text-slate-700 mb-10"
        >
          Discover what's next for your business with AI-powered location
          intelligence.
        </p>

        {/* Event info card */}
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          className=" border border-slate-200 rounded-2xl p-4 sm:p-6 max-w-md divide-y divide-slate-100 bg-white/60 backdrop-blur-sm"
        >
          {/* Date & Time */}
          <div className="flex items-start gap-4 pb-5">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Icon
                icon="mdi:calendar-outline"
                className="text-blue-600 text-xl"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Date &amp; Time
              </p>
              <p className="font-bold text-slate-800">September 24th, 2026</p>
              <p className="text-slate-500 text-sm">12:00 PM to 3:30 PM CDT</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 pt-5">
            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
              <Icon
                icon="mdi:map-marker-outline"
                className="text-green-600 text-xl"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="font-bold text-slate-800">
                Google Chicago - Fulton Market
              </p>
              <p className="text-slate-500 text-sm">
                320 N Morgan St Suite 600, Chicago, IL 60607
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
