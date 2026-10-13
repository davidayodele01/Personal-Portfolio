import { ChevronDown } from "lucide-react";

const skills = [
  "React",
  "Tailwind CSS",
  "Figma",
  "VScode",
  "Vercel",
  "Github",
  "Vite",
  "Trello",
  "Git",
  "Rest Api",
];

const Skills = () => {
  return (
    <section>
      <div className="mt-20 relative">
        <p className="text-sm text-primary/70 mb-6 text-center uppercase">
          Technologies i worked with
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex-shrink-0 px-8 py-4">
                <span className="text-xl font-semibold text-[#f5f5f5] hover:text-[#5c5a5a] transition-colors gap-4">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Next Section 
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[#f5f5f5] hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div> */}
    </section>
  );
};

export default Skills;
