'use client'

import { motion } from "framer-motion"
import { ImageGallery } from "@/components/image-gallery"

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#4ade80] via-orange-400 to-[#4ade80] bg-clip-text text-transparent">
            PEPinem in Action
          </h2>
          <ImageGallery />
        </motion.div>
      </div>
    </section>
  )
}

