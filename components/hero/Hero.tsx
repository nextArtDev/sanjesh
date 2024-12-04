import React from 'react'
import HeroSvg from '../texts/HeroSvg'
import APLogo from '../texts/APLogo'

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
    </section>
  )
}

export default Hero
