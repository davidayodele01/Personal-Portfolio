import { Code, Code2, CodeIcon, Terminal } from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { FaIdeal } from "react-icons/fa";
import { FcIdea, FcNoIdea } from "react-icons/fc";
import { GiIdea } from "react-icons/gi";
import { MdDraw } from "react-icons/md";
import { PiTerminalWindowFill } from "react-icons/pi";

const highlights = [
  {
    icon: Code2,
    title: "Development",
    description:
      "JavaScript (ES6+), HTML5, CSS3, React.js, React Hooks, React Context API, Tailwind CSS, Framer Motion",
  },
  {
    icon: MdDraw,
    title: "Design",
    description:
      "Figma, Wireframing, PrototypingUser Research, User Personas, User Flows, Storyboarding, A/B Testing, Design Systems",
  },
  {
    icon: Terminal,
    title: "Dev Tools & Platforms",
    description: "Git, GitHub, Visual Studio Code, Vite, Vercel, Trello",
  },
  {
    icon: BiBulb,
    title: "Concepts",
    description:
      " Component-Based Architecture, Responsive/Mobile-First Design, REST API Integration, Cross-Browser Compatibility,  Clear Communication, Attention to Detail, Analytical Thinking, Time Management, Creativity, Team Collaboration",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
          {/* LHS */}
          <div className="space-y-8 items-center justify-center ">
            <div className="flex nitems-center justify-center">
              <span className="text-primary/70 text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              Building the Future,{" "}
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-[#f5f5f5]">
              <p>
                "A Frontend Developer with a strong UI/UX design background,
                combining hands-on product design experience including
                wireframing, prototyping, user research, and design systems with
                practical React and JavaScript development skills. Experienced
                in translating user needs into interactive, accessible
                interfaces and building them in clean code. Adept at
                collaborating across the full product lifecycle with
                cross-functional teams to deliver high-performance digital
                experiences."
              </p>
            </div>

            {/* Mission statement */}
            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-[#f5f5f5]">
                To craft lightning-fast, intuitive, and universally accessible
                digital experiences that seamlessly bridge human intent and
                exceptional design.
              </p>
            </div>
          </div>
          {/* RHS */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="glass p-6 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 text-primary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#f5f5f5]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
