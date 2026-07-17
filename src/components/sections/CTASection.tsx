"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const RECAPTCHA_SITE_KEY = "6Leu1FctAAAAAP47TDcdb6THKR8nN-lrfXR8-hjn";

function getRecaptchaToken(action: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).grecaptcha.ready(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}

type Status = "idle" | "loading" | "success" | "error";

const EMPTY_FORM = {
  email: "",
  firstName: "",
  lastName: "",
  message: "",
};

export default function CTASection() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [countdown, setCountdown] = useState(10);
  const [form, setForm] = useState(EMPTY_FORM);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, []);

  const closeAndReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (tickRef.current) clearInterval(tickRef.current);
    setStatus("idle");
    setShowForm(false);
    setForm(EMPTY_FORM);
    setCountdown(6);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const recaptchaToken = await getRecaptchaToken("connect");

      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbz57TegFsjdlpMf0_s14dydcvNR9bNQTPPahY2IlB512__B8dpVSD-dneDW4RPDF0Ze/exec";

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ type: "connect", ...form, recaptchaToken }),
      });

      setStatus("success");
      setCountdown(10);

      tickRef.current = setInterval(() => {
        setCountdown((n) => {
          if (n <= 1) {
            if (tickRef.current) clearInterval(tickRef.current);
            return 0;
          }
          return n - 1;
        });
      }, 1000);

      timerRef.current = setTimeout(closeAndReset, 10000);
    } catch (err) {
      console.error("[Connect form]", err);
      setStatus("error");
    }
  };

  const inputCls =
    "w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 transition-colors";

  return (
    <section className="py-0 pt-8 sm:pt-12 px-2  sm:px-6">
      {/* Success modal */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeAndReset}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl p-10 max-w-sm w-full mx-4 text-center animate-[fadeSlideUp_0.35s_ease_both]">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <Icon
                icon="mdi:check-circle"
                className="text-green-500 text-4xl"
              />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Message Sent!
            </h2>
            <p className="text-slate-500 text-sm mb-3 leading-relaxed">
              Thanks for reaching out. Our team will contact you shortly to
              schedule your consultation.
            </p>
            <p className="text-xs text-slate-400 mb-6">
              Closing in {countdown} second{countdown !== 1 ? "s" : ""}…
            </p>
            <button
              onClick={closeAndReset}
              className="w-full bg-[#0058BD] hover:bg-blue-700 text-white text-sm font-semibold tracking-widest uppercase py-3 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-50 rounded-3xl mb-10 px-5 py-8 md:px-12 md:py-12">
          {/* Top row */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            {/* Left — text + button */}
            <div className="max-w-md">
              <h2
                data-aos="fade-right"
                className="text-4xl text-center lg:text-left text-[#424753] font-bold mb-4"
              >
                Can&apos;t Make The Event?
              </h2>
              <p
                data-aos="fade-right"
                className="text-[#1B1B1C] text-center lg:text-left leading-relaxed mb-8"
              >
                We understand! Reach out to book a personalized 1-on-1
                consultation to explore how Google Maps Platform, Google Cloud,
                and AI can support your specific business needs.
              </p>
              <button
                data-aos="fade-right"
                onClick={() => setShowForm((v) => !v)}
                className="flex w-full md:w-fit mx-auto lg:mx-0 justify-center items-center gap-2 bg-[#0058BD] hover:bg-[#15397A] text-white text-sm font-bold tracking-widest uppercase px-10 py-4 rounded-xl transition-colors"
              >
                Let&apos;s Connect!
                <Icon
                  icon={showForm ? "mdi:chevron-up" : "mdi:chevron-down"}
                  className="text-lg"
                />
              </button>
            </div>

            {/* Right — illustration */}
            <div className="flex-shrink-0 flex justify-center md:justify-end w-full max-w-sm lg:max-w-md">
              <Image
                data-aos="fade-left"
                src="/assets/images/cta-image.png"
                alt="Schedule a consultation"
                width={480}
                height={300}
                className="object-contain w-[80%]"
              />
            </div>
          </div>

          {/* Expandable connect form */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showForm
                ? "grid-rows-[1fr] opacity-100 mt-10"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="bg-white rounded-2xl  p-4 md:p-8 md:p-10">
                <h3 className="text-md font-bold text-slate-800 mb-8">
                  Please tell us more and we will reach out to you shortly.
                </h3>
                {/* <p className="text-slate-500 text-sm mb-7">
                  Fill in your details and we&apos;ll get back to you shortly.
                </p> */}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Work Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputCls}
                    />
                  </div>

                  {/* First + Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">
                      What are you interested in learning about?
                    </label>
                    <textarea
                      name="message"
                      placeholder="I'd like to learn more about Google's new geospatial analytics capabilities..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500 text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#0058BD] hover:bg-[#15397A] disabled:opacity-60 text-white font-semibold text-sm tracking-widest uppercase py-4 rounded-xl transition-colors"
                  >
                    {status === "loading" ? "Sending…" : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
