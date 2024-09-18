import Image from "next/image";
import BgBeams from '@components/bgBeams'
import Hero from '@components/HeroParallax'

export default function Home() {
  return (
    <div className="font-PlayfairDisplay">
      <BgBeams />
      <Hero className="mb-10" />
      </div>
  );
}
