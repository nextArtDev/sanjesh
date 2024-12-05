import React from 'react'
import HeroSvg from '../texts/HeroSvg'
import APLogo from '../texts/APLogo'
import { Sparkles } from '../sparkles/Sparkles'

type Props = {}

function Hero({}: Props) {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <article className="flex flex-col gap-8">
        <APLogo className="mx-auto w-[20%]" />
        <HeroSvg className="  pr-5" />
        <h2 className="nev-btn mx-auto px-4 py-2 md:px-8 md:py-4  rounded-2xl w-fit text-center font-semibold text-lg md:text:xl text-foreground/80 neu-shadow  ">
          ناحیه یک اهواز
        </h2>
      </article>
      <div className="relative mt-20 h-80 w-full  overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 dark:before:bg-[radial-gradient(circle_at_bottom_center,#b3ff00,transparent_90%)] before:bg-[radial-gradient(circle_at_bottom_center,#1122ff,transparent_90%)]  before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-background after:bg-background">
        <Sparkles
          density={800}
          speed={1.2}
          size={1.2}
          direction="top"
          opacitySpeed={2}
          color="#b3ff00"
          className="absolute inset-x-0 bottom-0 h-full w-full "
        />
      </div>
    </section>
  )
}

export default Hero
