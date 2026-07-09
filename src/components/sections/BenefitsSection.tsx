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
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Key Benefits
          </span>
          <h2 className="text-4xl mb-18 md:text-5xl font-bold text-slate-900">
            What You Can Expect
          </h2>
        </div>

        {/* 2-col staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left column */}
          <div className="flex flex-col gap-5">
            {[BENEFITS[0], BENEFITS[2]].map((b) => (
              <Card key={b.title} {...b} />
            ))}
          </div>

          {/* Right column — offset down */}
          <div className="flex flex-col gap-5 md:mt-14">
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
    <div className="relative border-1 border-gray-200 rounded-3xl p-8">
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
      <h3 className="text-3xl font-medium text-slate-900 mb-4">
        {title.split("\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </h3>
      <p className="text-[#424753] leading-relaxed text-md">{body}</p>
    </div>
  );
}
