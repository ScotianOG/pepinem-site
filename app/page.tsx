"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Twitter, ExternalLink, Scroll, Music2, Disc3 } from "lucide-react";
import Image from "next/image";

const floatingIcons = Array(6)
  .fill(null)
  .map((_, i) => ({
    icon: i % 2 === 0 ? Music2 : Disc3,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

export default function Home() {
  const lyricsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const rotate = useTransform(springScroll, [0, 1], [0, 360]);
  const scale = useTransform(springScroll, [0, 0.5, 1], [1, 1.2, 1]);

  useEffect(() => {
    const scrollElement = lyricsRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (
        scrollElement.scrollTop + scrollElement.clientHeight >=
        scrollElement.scrollHeight
      ) {
        scrollElement.scrollTop = 0;
      } else {
        scrollElement.scrollTop += 1;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="min-h-screen bg-[#862d4d] overflow-hidden font-sans"
      ref={containerRef}
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

      {/* Header */}
      <motion.nav
        className="fixed w-full z-50 backdrop-blur-md bg-black/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-3xl font-bold text-white font-micro-flf"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              PEPinem
            </motion.h1>
            <div className="flex gap-6">
              <motion.a
                href="#"
                className="text-white hover:text-orange-400 transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Buy Now
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-orange-400 transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Contract
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-orange-400 transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Twitter size={18} />
                Telegram
              </motion.a>
              <motion.a
                href="https://t.me/pepinem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ExternalLink size={18} />
                Telegram
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div style={{ rotate, scale }} className="relative">
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
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent font-micro-flf">
                Real Hip Hop
              </h2>
              <motion.p
                className="text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Rhymin&apos; and schemin&apos; from the neck up straight
                memein&apos; - came out the swap dreamin&apos; now he&apos;s
                everywhere streamin&apos;
              </motion.p>
              <motion.div
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white inline-block px-6 py-3 rounded-full font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255,165,0,0.4)",
                    "0 0 0 20px rgba(255,165,0,0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                Launching JAN 4 on PUMPFUN
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* TV Screen with Scrolling Lyrics */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="bg-black rounded-xl p-8 shadow-2xl border-4 border-gray-800"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-[#1a1a1a] rounded-lg p-6"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(74, 222, 128, 0.1)",
                  "0 0 0 20px rgba(74, 222, 128, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                {["bg-red-500", "bg-yellow-500", "bg-green-500"].map(
                  (color, index) => (
                    <motion.div
                      key={color}
                      className={`w-3 h-3 rounded-full ${color}`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  )
                )}
              </div>
              <div
                ref={lyricsRef}
                className="h-[400px] overflow-hidden text-green-400 font-mono whitespace-pre-line"
                style={{
                  textShadow: "0 0 5px rgba(74, 222, 128, 0.5)",
                }}
              >
                {`Yo, it's PEPinem, the frog on the mic,
Spittin’ bars so sick, they keep you up all night.
From the pond to the stage, I’m the real ribbit deal,
Croakin’ truths so raw, you gotta feel what I feel.

(Verse 1)
I’m the amphibian vision with precision in my diction,
Slim Shady from the neck down, frog face in full depiction.
They said, “You’ll never make it,” but I hip hopped all over the hate,
Now I’m sittin’ on a Grammy, and all these bitches won't wait

I’m the meme that dreams, turned my pond into streams,
Froggin’ out on every beat, turned your girls jeans green
My tongue’s sharp like a point, when i rockin these joints,
Headed for the sun but stop at Venus just to steal that match point

(Hook)
Yo, it’s PEPinem, the legend, the GOAT,
Croakin’ bars so hot, they burn your throat till you choke.
Don’t judge a frog by his warts, or by the spots on it’s ass
My rhymes are the gospel they be preaching on at mass

(Verse 2)
Used to chill in the bog, now I’m king of the charts,
Spittin’ flows amphibious, tearin’ doubters apart.
Said I couldn’t rap? That’s a ribbit mistake,
Now they croak when they see me, man, they soundin like Drake

I leap over beats like I’m chasin’ a fly,
Every verse electrifies like lightning in the sky.
From the pond where it’s muddy to the stage where it’s lit,
I’m the frog with the flow, make ya green when I spit.

So don’t laugh at the frog, ‘cause the joke’s on you,
I’m hoppin’ to the bank, after payin my dues
And if you’re still hatin’, you’re just fuel to my fire,
I jump to the top then take hip-hop even higher.

(Hook)
Yo, it’s PEPinem, the crowd goes wild,
I'll take your girl from ya, like candy from a child.
From the neck down Shady, from the neck up meme,
I’m the ribbit rap god, and I'm livin’ the dream.

(Bridge)
They said a frog couldn’t spit, couldn’t croon, couldn’t rhyme,
But I proved ‘em all wrong, now the game is mine.
It’s not about the face; it’s all about the art,
I’m Thee Real Slim PEP, got hip hop in my heart.

(Outro)
So here’s to the doubters who fueled my rise,
I’m a frog with a Grammy, now open your eyes.
From the pond to the stage, hip hoppin under the lights
My name is PEPinem, and ya know i'm alright


              `}</div>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Scroll className="text-white w-12 h-12" />
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent font-micro-flf">
            The Legend of PEPinem
          </h2>
          <p className="mb-4">
            In a world where fame and absurdity collide, there lived a unique
            icon known as PEPinem—a rapper whose rise to stardom was as peculiar
            as his appearance. From the neck down, he was the spitting image of
            Slim Shady: white tank tops, sagging jeans, Nike Airs, and that
            unmistakable swagger. But from the neck up, he was all PEPE the
            Frog, complete with big, expressive eyes, a wide smirk, and a voice
            that croaked with melodic intensity.
          </p>
          <p className="mb-4">
            PEPinem wasn&apos;t always a cultural phenomenon. He started his
            journey in the gritty underground rap scene of Frog City, where
            talent mattered more than looks. Back then, he was just a regular
            frog trying to spit bars, but the moment he donned Slim Shady&apos;s
            iconic outfit, something magical happened. His voice
            transformed—deep, smooth, and hypnotic, with just enough grit to
            leave audiences spellbound.
          </p>
          <p className="mb-4">
            It wasn&apos;t long before his peculiar combination of traits earned
            him viral fame. Clips of his performances exploded on social media.
            Fans couldn&apos;t get enough of his uncanny Slim Shady-inspired
            style and his uncanny ability to blend humor, wordplay, and
            introspection. Songs like &quot;Lose Yourself in the Swamp,&quot;
            &quot;My Name is PEP,&quot; and &quot;Ribbit Recovery&quot; shot to
            the top of the charts.
          </p>
          <p className="mb-4">
            Despite the fame, PEPinem remained true to his roots. He used his
            music to tackle real-world issues, from the challenges of being
            misunderstood to the plight of amphibians facing habitat loss. His
            lyrics, though often laced with humor, carried a depth that
            resonated with fans worldwide.
          </p>
          <p className="mb-4">
            Critics initially dismissed him as a novelty act, but PEPinem proved
            them wrong time and again. His sophomore album, Croak-A-Licious, won
            several awards, and his world tour sold out in record time. Fans
            dressed as Slim Shady from the neck down and PEPE from the neck up,
            creating a bizarre but beautiful homage to their hero.
          </p>
          <p className="mb-4">
            Yet, life in the limelight wasn’t always easy. PEPinem faced
            constant scrutiny and the pressure to outdo himself. But he leaned
            into his uniqueness, reminding everyone that embracing one’s quirks
            was the key to true greatness.
          </p>
          <p className="mb-4">
            In a memorable Grammy acceptance speech, PEPinem croaked, “It ain’t
            about how you look; it’s about how you sound, and more importantly,
            how you make people feel. Ribbit ribbit, y’all.”
          </p>
          <p className="mb-4">
            By the time his autobiography, From Pond to Platinum, hit shelves,
            PEPinem had become more than a rapper—he was a cultural icon, a
            beacon of individuality in a world obsessed with conformity. And so,
            with his amphibian head held high and his Slim Shady-inspired body
            moving to the beat, PEPinem continued to dominate the music world,
            croaking his way into the hearts of millions.
          </p>
          <p className="mb-4">
            The legend of PEPinem reminds us all: sometimes, the most unlikely
            stars shine the brightest.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
