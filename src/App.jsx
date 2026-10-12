import NavBar from "./layout/NavBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-[#0a0a0a] text-white">
      {/* Fixed background particle overlay */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
