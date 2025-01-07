"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Scroll } from "lucide-react";

interface TVScreenProps {
  onPlayStateChange: (isPlaying: boolean) => void;
}

const songs = [
  {
    title: "Amphibian Vision",
    lyrics: `"Amphibian Vision"
By PEPinem

Yo, it's pepp N. M., the frog on the mic,
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
Yo, it’s pep N.M., the legend, the GOAT,
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
Yo, it’s Pepp N.M., the crowd goes wild,
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
My name is pepp N.M., and ya know i'm alright`,
    audio: "/audio/amphibian-vision.mp3",
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
    audio: "/audio/lose-yourself-in-the-swamp.mp3",
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
    audio: "/audio/frog-god.mp3",
  },
];

const story = `In a world where fame and absurdity collide, there lived a unique icon known as PEPinem—a rapper whose rise to stardom was as peculiar as his appearance. From the neck down, he was the spitting image of Slim Shady: white tank tops, sagging jeans, Nike Airs, and that unmistakable swagger. But from the neck up, he was all PEPE the Frog, complete with big, expressive eyes, a wide smirk, and a voice that croaked with melodic intensity.

PEPinem wasn't always a cultural phenomenon. He started his journey in the gritty underground rap scene of Frog City, where talent mattered more than looks. Back then, he was just a regular frog trying to spit bars, but the moment he donned Slim Shady's iconic outfit, something magical happened. His voice transformed—deep, smooth, and hypnotic, with just enough grit to leave audiences spellbound.

It wasn't long before his peculiar combination of traits earned him viral fame. Clips of his performances exploded on social media. Fans couldn't get enough of his uncanny Slim Shady-inspired style and his uncanny ability to blend humor, wordplay, and introspection. Songs like "Lose Yourself in the Swamp," "My Name is PEP," and "Ribbit Recovery" shot to the top of the charts.

PEPinem's rise wasn't without controversy. Critics accused him of cultural appropriation, both of human and amphibian cultures. But his fans argued that he was a bridge between worlds, bringing together the gritty realism of rap with the absurdist humor of internet meme culture. His lyrics often touched on this duality, exploring themes of identity, belonging, and the nature of fame in the digital age.

Today, PEPinem stands as one of the most recognizable figures in both music and meme culture. His unique blend of rap skills, visual absurdity, and genuine artistry has inspired a new generation of artists to embrace their quirks and push the boundaries of creative expression. Whether you see him as a novelty or a genius, there's no denying that PEPinem has left an indelible mark on the landscape of popular culture.`;

export function TVScreen({ onPlayStateChange }: TVScreenProps) {
  const [content, setContent] = useState('story')
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const lyricsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = lyricsRef.current
    if (!scrollElement) return
    
    const scroll = () => {
      if (scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight) {
        scrollElement.scrollTop = 0
      } else {
        scrollElement.scrollTop += 1
      }
    }
    
    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [content, currentSong])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentSong])

  const togglePlayPause = (play: boolean) => {
    setIsPlaying(play);
    onPlayStateChange(play);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(false);
    onPlayStateChange(false);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(false);
    onPlayStateChange(false);
  };

  return (
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
                {[
                  'bg-red-500',
                  'bg-yellow-500',
                  'bg-green-500'
                ].map((color, index) => (
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
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setContent('story')}
                  className={`text-xs ${content === 'story' ? 'bg-green-500 text-black' : 'bg-gray-700 text-white'}`}
                >
                  Story
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setContent('songs')}
                  className={`text-xs ${content === 'songs' ? 'bg-green-500 text-black' : 'bg-gray-700 text-white'}`}
                >
                  Songs
                </Button>
              </div>
            </div>
            <div 
              ref={lyricsRef}
              className="h-[400px] overflow-hidden text-green-400 font-mono whitespace-pre-line"
              style={{ 
                textShadow: '0 0 5px rgba(74, 222, 128, 0.5)',
              }}
            >
              {content === 'story' ? story : songs[currentSong].lyrics}
            </div>
            {content === 'songs' && (
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSong}
                    className="text-xs bg-gray-700 text-white"
                  >
                    Previous Song
                  </Button>
                  <span className="text-green-400 text-sm">{songs[currentSong].title}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextSong}
                    className="text-xs bg-gray-700 text-white"
                  >
                    Next Song
                  </Button>
                </div>
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => togglePlayPause(true)}
                    disabled={isPlaying}
                    className="text-xs bg-gray-700 text-white"
                  >
                    Play
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => togglePlayPause(false)}
                    disabled={!isPlaying}
                    className="text-xs bg-gray-700 text-white"
                  >
                    Stop
                  </Button>
                </div>
                <audio
                  ref={audioRef}
                  src={songs[currentSong].audio}
                  onEnded={() => {
                    setIsPlaying(false);
                    onPlayStateChange(false);
                  }}
                />
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
  )
}

