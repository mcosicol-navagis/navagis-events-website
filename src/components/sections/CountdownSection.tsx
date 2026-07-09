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
    <section className="py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0058BD] rounded-3xl px-10 py-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            See You In Chicago!
          </h2>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {units.map(({ value, label }) => (
              <div key={label} className="bg-[#063DAB] rounded-2xl py-8 px-4">
                <p className="text-5xl font-bold tabular-nums mb-2">{value}</p>
                <p className="text-xs font-semibold tracking-widest text-blue-200 uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-blue-100">
            Please note travel and parking will be at the expense of the
            attendee.
          </p>
        </div>
      </div>
    </section>
  );
}
