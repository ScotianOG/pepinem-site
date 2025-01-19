'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Music2, Disc3, Headphones, Radio, Mic2, Speaker, Volume2, Music4, Podcast, AudioWaveformIcon as Waveform } from 'lucide-react'
import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { MusicSection } from "@/components/sections/music-section"
import { GallerySection } from "@/components/sections/gallery-section"

// Expanded icon set with more variety
const floatingIcons = Array(10).fill(null).map((_, i) => ({
  icon: [Music2, Disc3, Headphones, Radio, Mic2, Speaker, Volume2, Music4, Podcast, Waveform][i],
  initialX: Math.random() * 100,
  initialY: Math.random() * 100,
  color: [
    '#4ade80', // green
    '#f472b6', // pink
    '#60a5fa', // blue
    '#fb923c', // orange
    '#a78bfa', // purple
    '#4ade80', // green
    '#f472b6', // pink
    '#60a5fa', // blue
    '#fb923c', // orange
    '#a78bfa', // purple
  ][i]
}))

// Laser beam positions
const laserBeams = Array(6).fill(null).map((_, i) => ({
  angle: (i * 60) % 360,
  color: [
    'from-green-500',
    'from-pink-500',
    'from-blue-500',
    'from-orange-500',
    'from-purple-500',
    'from-yellow-500'
  ][i]
}))

export default function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  return (
    <main className={`min-h-screen overflow-x-hidden font-sans transition-colors duration-500 ${
      isMusicPlaying ? 'bg-black' : 'bg-[#862d4d]'
    }`}>
      {/* Enhanced Floating Background Elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="fixed text-white/20 z-0"
          initial={{ x: item.initialX + 'vw', y: item.initialY + 'vh' }}
          animate={{
            x: [item.initialX + 'vw', (item.initialX + 10) + 'vw', item.initialX + 'vw'],
            y: [item.initialY + 'vh', (item.initialY + 10) + 'vh', item.initialY + 'vh'],
            rotate: [0, 360, 0],
            filter: isMusicPlaying 
              ? ['brightness(0.5)', 'brightness(2)', 'brightness(0.5)'] 
              : 'brightness(1)',
            scale: isMusicPlaying ? [1, 1.2, 1] : 1,
            opacity: isMusicPlaying ? [0.2, 1, 0.2] : 0.2,
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "linear",
            filter: {
              duration: 0.5,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 0.5,
              repeat: Infinity,
              ease: "linear"
            },
            opacity: {
              duration: 0.5,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          style={{
            color: item.color
          }}
        >
          <item.icon size={50 + index * 10} />
        </motion.div>
      ))}

      {/* Enhanced Visual Effects when Music is Playing */}
      <AnimatePresence>
        {isMusicPlaying && (
          <>
            {/* Flashing Overlay */}
            <motion.div
              className="fixed inset-0 pointer-events-none z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mix-blend-overlay" />
            </motion.div>

            {/* Laser Beams */}
            {laserBeams.map((beam, index) => (
              <motion.div
                key={`beam-${index}`}
                className={`fixed top-0 left-1/2 h-[200vh] w-1 origin-top pointer-events-none z-5
                  bg-gradient-to-b ${beam.color} to-transparent opacity-50`}
                initial={{ rotate: beam.angle }}
                animate={{
                  rotate: [beam.angle, beam.angle + 30, beam.angle],
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2
                }}
              />
            ))}

            {/* Pulsing Glow */}
            <motion.div
              className="fixed inset-0 pointer-events-none z-5"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 bg-gradient-radial from-green-500/20 via-transparent to-transparent" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Navbar />
      
      <HeroSection isMusicPlaying={isMusicPlaying} />
      <MusicSection onPlayStateChange={setIsMusicPlaying} />
      <GallerySection />
    </main>
  )
}

