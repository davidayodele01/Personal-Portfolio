import { Mail, MapPin, Phone, Send } from "lucide-react";
import {Button} from "../component/Button"
import { useState } from "react";


const contactInfo = [
  {
    icons: Mail,
    label: "Email",
    value: "adavidoluwafemi@gmail.com",
    href: "mailto:adavidoluwafemi@gmail.com",
  },
  {
    icons: Phone,
    label: "Phone",
    value: "(+234) 802-258-0553",
    href: "tel:+2348022580553",
  },
  {
    icons: MapPin,
    label: "Location",
    value: "Lekki, Lagos, Nigeria",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
  }
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight rounded-full blur-3xl" />
      </div>
      <div container mx-auto px-6 relative z-10>
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary/70 text-sm font-medium tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-primary">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great
            </span>
          </h2>
          <p className="text-[#f5f5f5] ">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30">
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-[#5c5a5a] rounded-xl border border focus:border-primary focus-ring-1 focus-ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-[#5c5a5a] rounded-xl border border focus:border-primary focus-ring-1 focus-ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Your message"
                  type="text"
                  className="w-full px-4 py-3 bg-[#5c5a5a] rounded-xl border border focus:border-primary focus-ring-1 focus-ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button className="w-full flex" type="submit" size="lg">
                <span>
                  Send Message <Send />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;