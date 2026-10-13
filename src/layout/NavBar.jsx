import { Menu, XIcon } from "lucide-react";
import { Button } from "../component/Button";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 transition-all duration-500 bg-transparent py-5 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          DA<span className="text-primary">.</span>
        </a>

        {/* NavLink for desktop */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-6 py-3 flex items-center gap-3">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-[#ffffff] hover:text-primary rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="md" variant="secondary">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#f5f5f5]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong absolute top-full left-0 right-0 border-t border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-[#f5f5f5] hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <Button size="md" className="w-full">
                Contact Me
              </Button>
            </div>
            
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
