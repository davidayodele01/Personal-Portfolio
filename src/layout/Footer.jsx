import { BsGithub, BsLinkedin } from "react-icons/bs";

const socialLinks = [
  {
    icon: BsGithub,
    href: "https://github.com/davidayodele01",
    label: "GitHub",
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/davidayodele01/",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#111111]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Logo and Copyright */}
        <div className="flex flex-col gap-2">
          <a href="#" className="text-xl font-bold tracking-tight">
            DA <span className="text-primary">.</span>
          </a>
          <p className="text-xs text-[#f5f5f5]/60">
            &copy; {currentYear} David Ayodele. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-[#f5f5f5] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all text-[#f5f5f5]"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
