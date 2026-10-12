import { ArrowRight, Download } from "lucide-react";
import { Button } from "../component/Button";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LHS */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
              Frontend Developer - React Specialist
            </span>
          </div>
          {/* Headline */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Crafting <span className="text-primary glow-text">Digital</span>
              <br />
              experience with
              <br />
              <span className="font-serif italic font-normal text-white">
                Precision.
              </span>
            </h1>
            <p className="text-lg text-[#f5f5f5] max-w-lg pt-4">
              Hi, I&apos;m David Ayodele — a Frontend developer specialized in
              React, Tailwind CSS, and JavaScript. I build scalable, performant
              web applications that users love.
            </p>
          </div>
          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <Button className="" size="lg">
              Contact Me <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white hover:text-primary transition-colors text-sm font-medium"
            >
              <Download className="w-5 h-5" /> Download CV
            </a>
          </div>
        </div>

        {/* RHS */}
        <div className="relative">
          {/* Profile image */}
          <div className="relative max-w-md mx-auto">
            {/* A glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src="/WhatsApp_Image_2024-09-03_at_00.59.22-removebg-preview (1).png"
                alt="David Ayodele"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-[-2px] right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-white">
                    Available for work
                  </span>
                </div>
              </div>
              {/* Stat Badge */}
              <div className="absolute -top-4 left-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-xs text-[#f5f5f5]">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
