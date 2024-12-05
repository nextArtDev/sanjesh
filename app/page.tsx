import ShadCarousel from '@/components/carousel/ShadCarousel'
import CustomBtn from '@/components/custom-btn/CustomBtn'
import Hero from '@/components/hero/Hero'
import { ModeToggle } from '@/components/mode-toggle'
import Player from '@/components/player'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ModeToggle />
      <Hero />

      <button className="signin-button">Sign in </button>
      <Player />
    </div>
  )
}
