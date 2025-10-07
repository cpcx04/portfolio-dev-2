"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfiniteMenu from "./InfiniteMenu";

const HeroSection = () => {
  const [particles, setParticles] = useState<any[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  const items = [
    {
      image: "/me.jpg",
      link: "https://www.linkedin.com/in/cristianpulcab/",
      title: " ",
      description: "",
    },
    {
      image: "/fusion.jpg",
      link: "https://www.linkedin.com/posts/cristianpulcab_fusiaejnstartups-supersprint-neotap-activity-7376299340727934976-EuGN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8V41wB0Zkean-lxJxv5GRldOUqOk_eFdg",
      title: "",
      description: "",
    },
    {
      image: "/charla.jpg",
      link: "https://www.linkedin.com/in/cristianpulcab/",
      title: "",
      description: "",
    },
    {
      image: "/pitch.jpg",
      link: "https://www.linkedin.com/in/cristianpulcab/",
      title: "",
      description: "",
    },
  ];

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setParticles(
      [...Array(40)].map(() => ({
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        bgOpacity1: Math.random() * 0.5 + 0.3,
        bgOpacity2: Math.random() * 0.5 + 0.3,
        initialX: Math.random() * window.innerWidth,
        targetX: Math.random() * window.innerWidth,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/40"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              background: `linear-gradient(135deg, rgba(6, 182, 212, ${particle.bgOpacity1}), rgba(59, 130, 246, ${particle.bgOpacity2}))`,
            }}
            initial={{
              x: particle.initialX,
              y: -20,
            }}
            animate={{
              y: dimensions.height + 20,
              x: particle.targetX,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main profile circle with InfiniteMenu */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          className="absolute -inset-8 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(6, 182, 212, 0.4)",
              "0 0 0 30px rgba(6, 182, 212, 0)",
              "0 0 0 0 rgba(6, 182, 212, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <motion.div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-8 md:border-[12px] border-transparent bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-2xl">
          {/* Inner white circle */}
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* InfiniteMenu replacing the image */}
            <div className="relative w-full h-full scale-150">
              <style jsx>{`
                #infinite-grid-menu-canvas ~ * {
                  display: none !important;
                }
              `}</style>
              <InfiniteMenu items={items} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 md:bottom-20 left-6 md:left-12 lg:left-20 z-10 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-100/50 shadow-xl"
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 font-light mb-2"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Software Developer
        </motion.h2>
        <p className="text-base md:text-lg text-gray-600">
          From{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 font-bold">
            ESPAÑA
          </span>
        </p>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border-4 border-cyan-400/30 rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-16 h-16 border-4 border-blue-400/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default HeroSection;
