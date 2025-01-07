"use client";

import { TVScreen } from "@/components/tv-screen";

interface MusicSectionProps {
  onPlayStateChange: (isPlaying: boolean) => void;
}

export function MusicSection({ onPlayStateChange }: MusicSectionProps) {
  return (
    <section id="music" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4ade80] via-orange-400 to-[#4ade80] bg-clip-text text-transparent">
          Story & Music
        </h2>
        <TVScreen onPlayStateChange={onPlayStateChange} />
      </div>
    </section>
  );
}
