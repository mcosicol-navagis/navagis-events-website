import Image from "next/image";

const SPEAKERS = [
  {
    name: "Jojo Guingao",
    role: "Navagis Chief Solutions Officer",
    photo: "/assets/images/s1.webp",
    logo: "/assets/images/google.webp",
    logoWidth: 24,
    logoHeight: 24,
  },
  {
    name: "Marc Glasstetter",
    role: "Enterprise Sales Leader, Google Maps Platform",
    photo: "/assets/images/s2.jpeg",
    logo: "/assets/images/google.webp",
    logoWidth: 24,
    logoHeight: 24,
  },
  {
    name: "Katie Auscavitch",
    role: "Google Maps Platform Specialist",
    photo: "/assets/images/s3.jpg",
    logo: "/assets/images/google.webp",
    logoWidth: 24,
    logoHeight: 24,
  },
  {
    name: "Jim Leflar",
    role: "Google Solutions Engineer",
    photo: "/assets/images/s3.jpg",
    logo: "/assets/images/google.webp",
    logoWidth: 24,
    logoHeight: 24,
  },
];

export default function SpeakersSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-14">
          Speakers
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPEAKERS.map((s) => (
            <div
              key={s.name}
              className="relative bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col items-center text-center"
            >
              {/* Company logo badge */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <Image
                  src={s.logo}
                  alt="Company logo"
                  width={s.logoWidth}
                  height={s.logoHeight}
                  className="object-contain"
                />
              </div>

              {/* Profile photo */}
              <div className="w-28 h-28 rounded-full overflow-hidden bg-slate-200 mb-5 mt-2">
                <Image
                  src={s.photo}
                  alt={s.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name & role */}
              <p className="font-bold text-slate-900 text-lg mb-1">{s.name}</p>
              <p className="text-slate-500 text-sm leading-snug">{s.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
