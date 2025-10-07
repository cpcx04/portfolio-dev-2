"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [particles, setParticles] = useState([]);

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className=" rounded-full p-4 ">
        <div className="flex flex-col gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-sm tracking-widest transition-all duration-300 origin-right font-medium ${
                    activeSection === item.id
                      ? "text-cyan-500 opacity-100"
                      : "text-gray-600 opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  {item.label}
                </span>
                <div className="relative">
                  <div
                    className={`w-1 h-16 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-b from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                        : "bg-gray-300 group-hover:bg-gradient-to-b group-hover:from-cyan-400 group-hover:to-blue-500"
                    }`}
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
export default Navigation;
