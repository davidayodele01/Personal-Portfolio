const experiences = [
  {
    period: "2022 - present",
    role: "Product Designer",
    company: "Techxon Innovation",
    description: "Leading design for an ecommerce",
    technologies: ["Figma", "AutoLayout", "Responsiveness"],
    current: true,
  },
  {
    period: "2022 - present",
    role: "Product Designer",
    company: "Techxon Innovation",
    description: "Leading design for an ecommerce",
    technologies: ["Figma", "AutoLayout", "Responsiveness"],
    current: false,
  },
  {
    period: "2022 - present",
    role: "Product Designer",
    company: "Techxon Innovation",
    description: "Leading design for an ecommerce",
    technologies: ["Figma", "AutoLayout", "Responsiveness"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      {/* Main Container with responsive horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#f5f5f5] text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speak volumes
            </span>
          </h2>
          <p className="text-[#f5f5f5] mt-4">
            A timeline of a professional growth, from curious beginner to senior
            engineer leading teams and building products at scale
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/75 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative grid md:grid-cols-2 gap-8">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {experience.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <div className="text-sm text-primary font-medium">
                      {experience.period}
                    </div>
                    <h3 className="text-xl font-semibold mt-2">
                      {experience.role}
                    </h3>
                    <p className="text-[#f5f5f5]">{experience.company}</p>
                    <p className="text-sm text-[#f5f5f5] mt-4">
                      {experience.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {experience.technologies.map((technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#5c5a5a] text-xs rounded-full text-[#f5f5f5]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
