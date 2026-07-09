const SESSIONS = [
  {
    label: "Session 1",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-600",
    title: "Next-Gen Geospatial Technology: Maps + Cloud + AI",
    body: "Explore new technologies from Google Maps and Google Cloud. Dive into real-world applications for immersive customer experiences, intelligent routing, advanced geospatial analytics, and more!",
    highlight: false,
  },
  {
    label: "Session 2",
    badgeBg: "bg-green-100",
    badgeText: "text-green-600",
    title: "Optimizing Logistics & Tracking",
    body: "Discover how your business can achieve greater operational efficiency by tracking orders, deliveries, vehicles, and assets. Learn about advanced features for pickup awareness, and route optimization, elevating the entire delivery experience.",
    highlight: false,
  },
  {
    label: "Session 3",
    badgeBg: "bg-red-100",
    badgeText: "text-red-500",
    title: "Build vs. Buy: Tailored Solutions for Real Needs",
    body: "Understand the strategic advantages of developing tailored geospatial solutions with Google Maps Platform, rather than relying on restrictive off-the-shelf products. Learn how a custom approach ensures your solution truly fits your unique business needs and provides a competitive edge.",
    highlight: false,
  },
  {
    label: "Session 4",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-600",
    title: "Arrival Detection & Seamless Pickups",
    body: "Deep dive into solutions for Buy Online & Pick-Up In Store use cases, focusing on Quick Service Restaurants (QSRs), food delivery, and retail. Learn how arrival detection elevates the customer journey, improves operational flow, and prevents common issues like wrong store pickups.",
    highlight: false,
  },
  {
    label: "Session 5",
    badgeBg: "bg-yellow-300",
    badgeText: "text-yellow-800",
    title: "Google Chicago Office Tour",
    body: "Get an exclusive behind-the-scenes look at Google's innovative Chicago office.",
    highlight: true,
  },
];

export default function SessionsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Sessions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Exclusive Google Chicago
            <br />
            Office Tour
          </h2>
          <p className="text-[##1B1B1C] leading-relaxed max-w-3xl mx-auto">
            Join us right after the main event for a behind-the-scenes tour of
            Google&apos;s 350,000-square-foot Chicago office, located in the
            vibrant Fulton Market District.
          </p>
        </div>

        {/* Session list */}
        <div className="flex flex-col gap-4">
          {SESSIONS.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl px-6 py-5 ${
                s.highlight
                  ? "bg-amber-50 border border-amber-200 shadow-sm"
                  : "bg-white border border-slate-50 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${s.badgeBg} ${s.badgeText}`}
                >
                  {s.label}
                </span>
                <span className="font-bold text-slate-900">{s.title}</span>
              </div>
              <p className="text-[#424753] text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
