import ShadCarousel from '@/components/carousel/ShadCarousel'
import CustomBtn from '@/components/custom-btn/CustomBtn'
import Features from '@/components/features/Features'
import Hero from '@/components/hero/Hero'
import { ModeToggle } from '@/components/mode-toggle'
import Player from '@/components/player'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative   min-h-screen w-full h-full space-y-8 ">
      <section className="absolute w-fit h-fit top-2 left-20 z-50">
        <ModeToggle />
      </section>
      <Hero />

      <Features />
      {/* <button className="signin-button">Sign in </button> */}
      <Player />
    </div>
  )
}
