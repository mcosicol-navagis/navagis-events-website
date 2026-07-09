"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const INTEREST_OPTIONS = [
  "Strategic Site Selection & Market Analytics",
  "End-to-End Retail & Logistics Operations",
  "Immersive 3D Customer Experiences",
  "Geospatial AI & Spatial Reasoning",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function RegisterForm() {
  const [wantsTour, setWantsTour] = useState(true);
  const [interests, setInterests] = useState<string[]>([]);
  const [interestsOpen, setInterestsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    phone: "",
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setInterestsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleInterest = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_SCRIPT_URL;
      if (!scriptUrl) throw new Error("NEXT_PUBLIC_SCRIPT_URL is not set.");

      await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          ...form,
          interests: interests.join(", "),
          wantsTour,
        }),
      });

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const interestsLabel =
    interests.length === 0
      ? "I'm interested in hearing about (Select all that apply)"
      : interests.join(", ");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
      {/* Success modal */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setStatus("idle")}
          />
          <div className="relative bg-white rounded-2xl shadow-xl p-10 max-w-sm w-full mx-4 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <Icon
                icon="mdi:check-circle"
                className="text-green-500 text-4xl"
              />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              You&apos;re registered!
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Thanks for signing up. We&apos;ll be in touch with event details
              soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold tracking-widest uppercase py-3 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:border-blue-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:border-blue-400 transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:border-blue-400 transition-colors"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Acme Corp"
            value={form.companyName}
            onChange={handleChange}
            required
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:border-blue-400 transition-colors"
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Operations Manager"
            value={form.jobTitle}
            onChange={handleChange}
            required
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:border-blue-400 transition-colors"
          />
        </div>

        {/* Phone — optional */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Phone Number
          </label>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="US"
            value={form.phone}
            onChange={(val) =>
              setForm((prev) => ({ ...prev, phone: val ?? "" }))
            }
            placeholder="(555) 000-0000"
            className="phone-input-wrapper w-full"
          />
        </div>

        {/* Interests multi-select */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setInterestsOpen((v) => !v)}
            className="w-full border border-blue-400 rounded-lg px-4 py-3 text-left text-sm bg-white flex items-center justify-between gap-2 transition-colors"
          >
            <span
              className={`truncate ${interests.length === 0 ? "text-slate-400" : "text-slate-700"}`}
            >
              {interestsLabel}
            </span>
            <Icon
              icon={interestsOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
              className="text-slate-400 text-lg flex-shrink-0"
            />
          </button>

          {interestsOpen && (
            <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
              {INTEREST_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleInterest(opt)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                >
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors ${
                      interests.includes(opt)
                        ? "bg-blue-600 border-blue-600"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {interests.includes(opt) && (
                      <Icon icon="mdi:check" className="text-white text-xs" />
                    )}
                  </div>
                  <span className="text-sm text-slate-700">{opt}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tour checkbox */}
        <div className="flex items-start gap-3">
          <button
            type="button"
            role="checkbox"
            aria-checked={wantsTour}
            onClick={() => setWantsTour((v) => !v)}
            className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
              wantsTour ? "bg-[#0058BD]" : "border-2 border-slate-300 bg-white"
            }`}
          >
            {wantsTour && (
              <Icon icon="mdi:check" className="text-white text-xs" />
            )}
          </button>
          <span className="text-sm text-slate-700">
            I would like to attend the exclusive tour of the Google Chicago
            office
          </span>
        </div>

        {/* Error message */}
        {status === "error" && (
          <p className="text-sm text-red-500 text-center">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#0058BD] hover:bg-blue-800 disabled:opacity-60 text-white font-semibold text-sm tracking-widest uppercase py-4 rounded-xl transition-colors"
        >
          {status === "loading" ? "Submitting…" : "Register Now"}
        </button>

        {/* reCAPTCHA notice */}
        <p className="text-center text-xs text-slate-400">
          Protected by reCAPTCHA —{" "}
          <a href="#" className="underline hover:text-slate-600">
            Privacy Policy
          </a>{" "}
          &{" "}
          <a href="#" className="underline hover:text-slate-600">
            Terms of Service
          </a>
        </p>
      </form>
    </div>
  );
}
