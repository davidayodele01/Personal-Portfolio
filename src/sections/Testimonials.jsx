import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: " Good at communication.",
    author: "Joseph Babajide",
    role: "Frontend Developer",
  },
  {
    quote: "A dedicated person, willing to learn and grow.",
    author: "Miracle Sonye",
    role: "Product Designer",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary/70 text-sm font-medium tracking-wider uppercase">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-primary/70">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
              
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border relative">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary/50 flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#f5f5f5]/50" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                {testimonials[activeIndex].quote}
              </blockquote>

              {/* Details */}
              <div className="flex flex-col items-start gap-1">
                <div className="font-medium text-base">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-sm text-[#5c5a5a]">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              aria-label="Previous Testimonial"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={previous}
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-gray-500/30 hover:bg-gray-500/50"
                  }`}
                />
              ))}
            </div>

            <button
              aria-label="Next Testimonial"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={next}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
