"use client";

import { useState, useEffect } from "react";

const TARGET = new Date("2026-09-24T00:00:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function CountdownSection() {
  const [time, setTime] = useState(ZERO);

  useEffect(() => {
    // Set immediately so first client paint shows real values
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: pad(time.days), label: "Days" },
    { value: pad(time.hours), label: "Hours" },
    { value: pad(time.minutes), label: "Minutes" },
    { value: pad(time.seconds), label: "Seconds" },
  ];

  return (
    <section className="pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-b-3xl px-4 py-10 md:px-10 md:py-16 text-center text-white"
          style={{ background: "linear-gradient(to right, #0058BD, #3392FF)" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            See You In Chicago!
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto mb-10">
            {units.map(({ value, label }) => (
              <div key={label} className="bg-[#063DAB] rounded-2xl py-6 px-4 sm:py-8 sm:px-10">
                <p className="text-3xl sm:text-5xl font-bold tabular-nums mb-2">{value}</p>
                <p className="text-xs sm:text-sm font-regular tracking-widest text-blue-200 uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-blue-100">
            Please note travel and parking will be at the expense of the
            attendee. Please bring a government-issued ID to receive your event
            badge.
          </p>
        </div>
      </div>
    </section>
  );
}
