"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Twitter, ExternalLink, Scroll, Music2, Disc3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/image-gallery";
import Image from "next/image";

const floatingIcons = Array(6)
  .fill(null)
  .map((_, i) => ({
    icon: i % 2 === 0 ? Music2 : Disc3,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

const songs = [
  {
    title: "Amphibian Vision",
    lyrics: `"Amphibian Vision"
By PEPinem

Yo, it's PEPinem, the frog on the mic,
Spittin’ bars so sick, they keep you up all night.
From the pond to the stage, I’m the real ribbit deal,
Croakin’ truths so raw, you gotta feel what I feel.

(Verse 1)
I’m the amphibian vision with precision in my diction,
Slim Shady from the neck down, frog face in full depiction.
They said, “You’ll never make it,” but I hip hopped all over the hate,
Now I’m out with your princess while you sit home and wait

I’m the meme that dreams, turned my pond into streams,
Froggin’ out on every beat, turned your girls jeans green
My tongue’s sharp like a point, rappin universal joints
Space Frog gone to venus to steal the match point

(Hook)
Yo, it’s PEPinem, the legend, the GOAT,
Croakin’ bars so hot, they burn your throat till you choke.
Don’t judge me by my warts, or by the spots on my ass
cause my rhymes are the gospel they be preachin at mass

(Verse 2)
Used to chill in the bog, now I’m king of the charts,
Spittin’ flows amphibious, tearin’ tadpoles apart.
Said I couldn’t rap? Now my pad's got a gate,
And they croak when they see me, man, they soundin like Drake

I leap over beats like I’m chasin’ a fly,
Every verse electrifies like lightning in the sky.
From the pond where it’s muddy to the stage where it’s lit,
I’m the frog with the flow, make ya green when I spit.

So don’t laugh at the frog, ‘cause the joke’s on you,
I’m hoppin’ back from the bank, after payin my dues
My lyrics hit hard like a cartoon fist
Leavin mc's speechless like they just got kissed (by a prince)

(Hook)
Yo, it’s PEPinem, the crowd goes wild,
I'll take your girl from ya, like candy from a child.
Like mom's spaghetti, my balls make 'em drool
And they eyes go wide like that bitch Ja Rule 

(Bridge)
They said a frog couldn’t spit, couldn’t croon, couldn’t rhyme,
I came flyin out the grime ready for prime time
May be as green as a lime but I shine like fine wine
While you swine pine for signs i got the spine to make mine

Cuz it aint bout the face; it’s all bout the art,
I’m The Real Slim pep, and hip hop is my heart.

(Outro)
All you toads and tadpoles, y'all fueled my rise,
Now imma frog with a swagger, while you a punk servin fries
From the pond to the stage, hip hoppin under the lights
My name is PEPinem, and ya know i'm alright`,
  },
  {
    title: "Lose Yourself in the Swamp",
    lyrics: `"Lose Yourself in the Swamp"
By PEPinem

(Intro)
Look, if you had one hop, one opportunity
To seize everything you ever wanted, in one moment
Would you capture it, or just let it slip? Yo

(Verse 1)
His webbed palms are sweaty, eyes bulged, tongue is heavy
There's algae on his skin already, mom's fly spaghetti
He's nervous, but on the surface he looks calm and ready
To drop bombs, but he keeps on forgetting
What he wrote down, the whole crowd goes so loud
He opens his mouth, but the croaks won't come out
He's choking, how? Everybody's joking now
The clock's run out, time's up, over, blaow!

(Hook)
Snap back to reality, ope there goes gravity
Ope, there goes Frogbit, he choked
He's so mad, but he won't give up that easy, nope
He won't have it, he knows his whole back's to these ropes
It don't matter, he's dope, he knows that but he's broke
He's so stagnant, he knows when he goes back to this mobile home
That's when it's back to the lab again, yo
This whole rhapsody, better go capture this moment and hope it don't pass him

(Verse 2)
You better lose yourself in the swamp, the moment
You own it, you better never let it go (go)
You only get one shot, do not miss your chance to blow
This opportunity comes once in a lifetime, yo
You better lose yourself in the swamp, the moment
You own it, you better never let it go (go)
You only get one shot, do not miss your chance to blow
This opportunity comes once in a lifetime, yo

(Outro)
You can do anything you set your mind to, frog`,
  },
  {
    title: "Frog God",
    lyrics: `"Frog God"
By PEPinem

(Intro)
Yeah, it's the frog god
PEPinem, baby
Let's go

(Verse 1)
I'm beginning to feel like a Frog God, Frog God
All my people from the front to the back nod, back nod
Now, who thinks their arms are long enough to slap box, slap box?
They said I rap like a robot, so call me Frogbot

(Hook)
But for me to rap like a computer must be in my genes
I got a laptop in my back pocket
My pen'll go off when I half-cock it
Got a fat knot from that rap profit
Made a living and a killing off it
Ever since Bill Clinton was still in office
With Monica Lewinsky feeling on his nutsack
I'm an MC still as honest
But as rude and as indecent as all hell
Syllables, skill-a-holic (Kill 'em all with)
This flippity dippity-hippity hip-hop
You don't really wanna get into a pissing match
With this rappity brat, packing a Mac in the back of the Ac'
Backpack rap crap, yap-yap, yackity-yack

(Verse 2)
Now I'm not the first king of controversy
I am the worst thing since Elvis Presley
To do Black Music so selfishly
And use it to get myself wealthy (Hey)
There's a concept that works
Twenty million other white rappers emerge
But no matter how many fish in the sea
It'll be so empty without me

(Hook)

(Verse 3)
So you'll be leaving it up to me?
Will I fail? Nah, I nail it daily
All these other MCs, I overpowered
Call me Hypnotoad, I captured the game and aimed
To hold it up, like an umbrella for Rihanna
Ella, ella, eh, eh, eh
You're just green with envy, I'm greener than Kermit
The Frog, bitch, I'm what you're scared to be
You can't get on my level, you'll need a reservoir tip
I'm a frog god, so you better worship
Ribbit ribbit, motherfuckers
PEPinem out!`,
  },
];

const story = `In a world where fame and absurdity collide, there lived a unique icon known as PEPinem—a rapper whose rise to stardom was as peculiar as his appearance. From the neck down, he was the spitting image of Slim Shady: white tank tops, sagging jeans, Nike Airs, and that unmistakable swagger. But from the neck up, he was all PEPE the Frog, complete with big, expressive eyes, a wide smirk, and a voice that croaked with melodic intensity.

PEPinem wasn't always a cultural phenomenon. He started his journey in the gritty underground rap scene of Frog City, where talent mattered more than looks. Back then, he was just a regular frog trying to spit bars, but the moment he donned Slim Shady's iconic outfit, something magical happened. His voice transformed—deep, smooth, and hypnotic, with just enough grit to leave audiences spellbound.

It wasn't long before his peculiar combination of traits earned him viral fame. Clips of his performances exploded on social media. Fans couldn't get enough of his uncanny Slim Shady-inspired style and his uncanny ability to blend humor, wordplay, and introspection. Songs like "Lose Yourself in the Swamp," "My Name is PEP," and "Ribbit Recovery" shot to the top of the charts.

PEPinem's rise wasn't without controversy. Critics accused him of cultural appropriation, both of human and amphibian cultures. But his fans argued that he was a bridge between worlds, bringing together the gritty realism of rap with the absurdist humor of internet meme culture. His lyrics often touched on this duality, exploring themes of identity, belonging, and the nature of fame in the digital age.

Today, PEPinem stands as one of the most recognizable figures in both music and meme culture. His unique blend of rap skills, visual absurdity, and genuine artistry has inspired a new generation of artists to embrace their quirks and push the boundaries of creative expression. Whether you see him as a novelty or a genius, there's no denying that PEPinem has left an indelible mark on the landscape of popular culture.`;

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

  const [content, setContent] = useState("story");
  const [currentSong, setCurrentSong] = useState(0);

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
  }, [content, currentSong]);

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
            <Image
              src="pepinem-logo.jpg"
              alt="PEPinem Logo"
              width={48}
              height={48}
              className="rounded-full"
            />

            <motion.h1
              className="text-3xl font-bold text-white font-helvetica"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              PEPinem
            </motion.h1>
          </div>
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
              href="https://twitter.com/pepinem_hipHOP"
              className="text-white hover:text-orange-400 transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Twitter size={18} />
              Twitter
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
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent font-helvetica leading-normal">
                Real Hip Hop
              </h2>
              <motion.p
                className="text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Rhymin&apos; and schemin&apos; from the neck up straight
                memein&apos;
                <br>
                  Came out the swap dreamin&apos; now he&apos;s everywhere
                  streamin&apos;
                </br>
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
                Launching JAN 6 on PUMPFUN
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* TV Screen with Story and Songs */}
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
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
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
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setContent("story")}
                    className={`text-xs ${
                      content === "story"
                        ? "bg-green-500 text-black"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    Story
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setContent("songs")}
                    className={`text-xs ${
                      content === "songs"
                        ? "bg-green-500 text-black"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    Songs
                  </Button>
                </div>
              </div>
              <div
                ref={lyricsRef}
                className="h-[400px] overflow-hidden text-green-400 font-mono whitespace-pre-line"
                style={{
                  textShadow: "0 0 5px rgba(74, 222, 128, 0.5)",
                }}
              >
                {content === "story" ? story : songs[currentSong].lyrics}
              </div>
              {content === "songs" && (
                <div className="mt-4 flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentSong(
                        (prev) => (prev - 1 + songs.length) % songs.length
                      )
                    }
                    className="text-xs bg-gray-700 text-white"
                  >
                    Previous Song
                  </Button>
                  <span className="text-green-400 text-sm">
                    {songs[currentSong].title}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentSong((prev) => (prev + 1) % songs.length)
                    }
                    className="text-xs bg-gray-700 text-white"
                  >
                    Next Song
                  </Button>
                </div>
              )}
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

      {/* Image Gallery Section */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-white via-orange-400 to-white bg-clip-text text-transparent font-helvetica">
            Image Gallery
          </h2>
          <ImageGallery />
        </motion.div>
      </div>
    </main>
  );
}
