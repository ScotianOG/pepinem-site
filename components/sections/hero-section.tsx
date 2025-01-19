"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  isMusicPlaying: boolean;
}

export function HeroSection({ isMusicPlaying }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 opacity-75 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <Image
                src="/pepinem.gif"
                alt="PEPinem"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
          <div className="text-[#4ade80]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mb-6">
                <motion.div
                  className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#4ade80] to-[#4ade80]/50 opacity-75 blur"
                  animate={
                    isMusicPlaying
                      ? {
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.05, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="relative"
                  animate={
                    isMusicPlaying
                      ? {
                          scale: [1, 1.02, 1],
                          filter: [
                            "brightness(1)",
                            "brightness(1.2)",
                            "brightness(1)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Image
                    src="/banner.png"
                    alt="PEPINEM"
                    width={400}
                    height={100}
                    className="w-full"
                  />
                </motion.div>
              </div>
              <motion.p
                className="text-xl mb-6 font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                This is Real Hip HOP
              </motion.p>
              <motion.div
                className="bg-gradient-to-r from-[#4ade80] to-white text-black inline-block px-6 py-3 rounded-full font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(74,222,128,0.4)",
                    "0 0 0 20px rgba(74,222,128,0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                Launching JAN 19 on PUMPFUN
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
