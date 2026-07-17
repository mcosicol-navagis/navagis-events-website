"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import QuestionFlipSection from "./QuestionFlipSection";

const BENEFITS = [
  {
    icon: "fluent:building-retail-24-regular",
    iconBg: "bg-[#E2ECF6]",
    iconColor: "text-[#4285F4]",
    title: "Retail & Site Selection",
    body: "You picked that location based on demographics, but your competitor picked theirs based on actual foot traffic. Discover the difference.",
  },
  {
    icon: "carbon:chart-logistic-regression",
    iconBg: "bg-[#E1ECE8]",
    iconColor: "text-[#006E2C]",
    title: "Logistics & Fulfillment",
    body: "The visibility gap between a dispatched driver and a waiting customer is costing you more than you think.",
  },
  {
    icon: "ion:analytics",
    iconBg: "bg-[#EBE3E6]",
    iconColor: "text-[#B51B15]",
    title: "Geospatial Analytics",
    body: "You have more data than ever, but none of it tells you what's happening within a mile of your locations.",
  },
  {
    icon: "mdi:account-group-outline",
    iconBg: "bg-[#FAF0D0]",
    iconColor: "text-[#DFA705]",
    title: "Brand & Reputation Intelligence",
    body: "Customers leave reviews and then they leave your brand. Visualize the patterns before the churn shows up in revenue.",
  },
  {
    icon: "mdi:shield-check-outline",
    iconBg: "bg-[#E2ECF6]",
    iconColor: "text-[#4285F4]",
    title: "Public Safety & Civic Use",
    body: "The most dangerous intersections in your city are already visible in roadway intelligence data before the accidents even happen.",
  },
  {
    icon: "mingcute:ai-line",
    iconBg: "bg-[#E1ECE8]",
    iconColor: "text-[#006E2C]",
    title: "AI Agents & Spatial Reasoning",
    body: 'Give your AI a "visual voice" and anchor its reasoning in the physical world to move beyond simple chatbots and provide factual, real-time spatial answers.',
  },
  {
    icon: "majesticons:map-simple-destination-line",
    iconBg: "bg-[#EBE3E6]",
    iconColor: "text-[#B51B15]",
    title: "Immersive Experiences",
    body: "The gap between a browsed destination and a booked one is smaller than you think when you use immersive experiences to close it.",
  },
];

const LEFT = [BENEFITS[0], BENEFITS[2], BENEFITS[4], BENEFITS[6]];
const RIGHT = [BENEFITS[1], BENEFITS[3], BENEFITS[5]];

export default function BenefitsSection() {
  return (
    <section className="py-12 mb-14 px-4 sm:px-6 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl mb-14 md:text-5xl font-bold text-slate-900">
            Topics For Your Unique <br className="hidden md:block" /> Industry
            Challenges.
          </h2>
        </div>

        <div data-aos="fade-up">
          <QuestionFlipSection />
          <p className="text-[#424753] text-lg md:text-xl text-center md:max-w-2xl mx-auto mb-14">
            No matter your sector, if your business operates in the physical
            world, understanding the "where" and "why" is key to making better
            decisions.
          </p>
        </div>

        {/* 2-col staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {LEFT.map((b) => (
              <Card key={b.title} {...b} />
            ))}
          </div>

          {/* Right column — offset down */}
          <div className="flex flex-col gap-6 md:mt-14">
            {RIGHT.map((b) => (
              <Card key={b.title} {...b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  iconBg,
  iconColor,
  title,
  body,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  body: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: ny * -8, y: nx * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div data-aos="fade-up">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: tilt.x !== 0 || tilt.y !== 0 ? 1 : 0.98,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
        className="relative   overflow-hidden border border-gray-200 rounded-2xl px-10 py-10 cursor-default"
      >
        <div
          data-aos="fade-up"
          className="absolute -z-10 top-[20px] -left-[200px] w-[700px] h-[350px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #bdd8f0 0%, #f2f6f8 55%, transparent 70%)",
            filter: "blur(40px)",
            opacity: "20%",
          }}
        />
        <div
          className={`w-12 h-12 rounded-xl ${iconBg} mx-auto lg:mx-0 flex items-center justify-center mb-5`}
        >
          <Icon icon={icon} className={`${iconColor}  text-3xl`} />
        </div>
        <h3
          data-aos="fade-right"
          className="text-3xl font-bold  text-center lg:text-left text-slate-900 mb-3"
        >
          {title}
        </h3>
        <p
          data-aos="fade-right"
          className="text-[#424753]  text-center lg:text-left leading-relaxed text-md"
        >
          {body}
        </p>
      </motion.div>
    </div>
  );
}
