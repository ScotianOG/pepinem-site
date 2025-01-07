"use client";

import { motion } from "framer-motion";
import { Twitter, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <motion.nav
      className="fixed w-full z-50 backdrop-blur-md bg-black/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/pepinem-logo.jpg"
              alt="PEPinem Logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
              quality={100}
            />
            <motion.h1 className="text-[#4ade80] text-xl font-bold">
              PEPinem
            </motion.h1>
          </div>
          <div className="flex items-center gap-6">
            <motion.a
              href="#music"
              className="text-[#4ade80] hover:text-orange-400 transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Music
            </motion.a>
            <motion.a
              href="#gallery"
              className="text-[#4ade80] hover:text-orange-400 transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Gallery
            </motion.a>
            <motion.a
              href="#"
              className="text-[#4ade80] hover:text-orange-400 transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Buy Now
            </motion.a>
            <motion.a
              href="https://twitter.com/pepinem_hipHOP"
              className="text-[#4ade80] hover:text-orange-400 transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={18} />
              <span className="hidden sm:inline">Twitter</span>
            </motion.a>
            <motion.a
              href="https://t.me/pepinem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ade80] hover:text-orange-400 transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={18} />
              <span className="hidden sm:inline">Telegram</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
