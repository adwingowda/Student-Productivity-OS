import { Mail, Rocket, Brain } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "AI Inbox",
    description:
      "No more noise, just opportunities. Intelligent filtering that prioritizes high-impact communication.",
    iconBg: "bg-[#16243D]",
    iconColor: "text-[#B8C8FF]",
  },
  {
    icon: Rocket,
    title: "Career Engine",
    description:
      "Track internships and scholarships effortlessly with automated scraping and reminder systems.",
    iconBg: "bg-[#231B3F]",
    iconColor: "text-[#9B7CFF]",
  },
  {
    icon: Brain,
    title: "Study Assistant",
    description:
      "Generate guides and summaries in seconds. Transform messy lecture notes into structured knowledge.",
    iconBg: "bg-[#10352D]",
    iconColor: "text-[#4ADE80]",
  },
];

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-3xl border border-[#1F2B44] bg-[#0D1627] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E4369] hover:bg-[#101B2E]"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg}`}
              >
                <Icon size={24} className={feature.iconColor} />
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;