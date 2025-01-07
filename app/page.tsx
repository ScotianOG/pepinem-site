"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Disc3 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { MusicSection } from "@/components/sections/music-section";
import { GallerySection } from "@/components/sections/gallery-section";

const floatingIcons = Array(6)
  .fill(null)
  .map((_, i) => ({
    icon: i % 2 === 0 ? Music2 : Disc3,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

export default function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <main
      className={`min-h-screen overflow-x-hidden font-sans transition-colors duration-500 ${
        isMusicPlaying ? "bg-black" : "bg-[#862d4d]"
      }`}
    >
      {/* Floating Background Elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="fixed text-white/20 z-0"
          initial={{ x: item.initialX + "vw", y: item.initialY + "vh" }}
          animate={{
            x: [
              item.initialX + "vw",
              item.initialX + 10 + "vw",
              item.initialX + "vw",
            ],
            y: [
              item.initialY + "vh",
              item.initialY + 10 + "vh",
              item.initialY + "vh",
            ],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <item.icon size={50 + index * 10} />
        </motion.div>
      ))}

      {/* Flashing Lights */}
      <AnimatePresence>
        {isMusicPlaying && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mix-blend-overlay" />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <HeroSection isMusicPlaying={isMusicPlaying} />
      <MusicSection onPlayStateChange={setIsMusicPlaying} />
      <GallerySection />
    </main>
  );
}
