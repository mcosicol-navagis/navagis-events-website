import { Icon } from "@iconify/react";

const BENEFITS = [
  {
    icon: "uil:focus-target",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Strategic Site \n Selection",
    body: "Stop searching for vacant lots and start finding thriving ecosystems. Securely combine your internal data with rich, planetary-scale geospatial datasets to instantly deploy predictive analytics, evaluate market saturation, and confidently select sites with the highest ROI potential.",
  },
  {
    icon: "mdi:account-star-outline",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Immersive Customer Experiences",
    body: "Deepen customer engagement by turning standard navigation into captivating digital exploration. Utilize photorealistic visual environments to create immersive, branded journeys that give users a true feel for their destination before they even leave the house.",
  },
  {
    icon: "mdi:trending-up",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    title: "Streamlined Operations \n & Fulfillment",
    body: "Achieve greater operational efficiency from the warehouse to the front door. Discover how hyper-precise delivery windows, optimized fleet routing, and seamless automated arrival tracking can prevent misrouted handoffs and streamline in-store pickups.",
  },
  {
    icon: "mdi:account-group-outline",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "AI-Powered Spatial Reasoning",
    body: 'Give your AI a "visual voice" and anchor its reasoning in the physical world. Move beyond simple chatbots by integrating real-world location context into your large language models, providing users with factual, real-time travel estimates, multi-modal routing, and spatial answers directly within your applications.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl mb-18 md:text-5xl font-bold text-slate-900">
            What You Can Expect
          </h2>
        </div>

        {/* 2-col staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {[BENEFITS[0], BENEFITS[2]].map((b) => (
              <Card key={b.title} {...b} />
            ))}
          </div>

          {/* Right column — offset down */}
          <div className="flex flex-col gap-8 md:mt-14">
            {[BENEFITS[1], BENEFITS[3]].map((b) => (
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
  return (
    <div
      data-aos="fade-up"
      className="relative overflow-hidden border-1 border-gray-200 rounded-3xl px-5 py-8 md:px-10 md:py-12"
    >
      <div
        className="absolute -z-10 top-[20px] -left-[200px] w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #bdd8f0 0%, #f2f6f8 55%, transparent 70%)",
          filter: "blur(40px)",
          opacity: "30%",
        }}
      />
      <div
        className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-6`}
      >
        <Icon icon={icon} className={`${iconColor} text-2xl`} />
      </div>
      <h3 className="text-4xl font-semibold py-2 text-slate-900 mb-4">
        {title.split("\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </h3>
      <p className="text-[#1B1B1C] leading-relaxed text-md ">{body}</p>
    </div>
  );
}
