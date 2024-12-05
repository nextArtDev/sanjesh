import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'

import Image from 'next/image'
// import { imgPreview } from '@/components/website/constant'

import Carousel, { SliderContainer, Slider, SliderDotButton } from './Carousel'
import imgPreview from '../../public/45.avif'
import Player from '../player'
import { SlideImage, SlideWrapper } from './SlideWrapper'

//https://www.ui-layout.com/components/carousel

export const slides = [
  {
    id: 1,
    image: '/45.avif',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorem, maxime distinctio rerum iure, ipsum amet blanditiis aspernatur accusamus placeat optio at. Velit amet inventore nemo corporis. Animi, rerum commodi.',
    link: '',
  },
  {
    id: 2,
    image: '/globe.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorem, maxime distinctio rerum iure, ipsum amet blanditiis aspernatur accusamus placeat optio at. Velit amet inventore nemo corporis. Animi, rerum commodi.',
    link: '',
  },
  {
    id: 3,
    image: '/45.avif',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorem, maxime distinctio rerum iure, ipsum amet blanditiis aspernatur accusamus placeat optio at. Velit amet inventore nemo corporis. Animi, rerum commodi.',
    link: '',
  },
  {
    id: 4,
    image: '/globe.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorem, maxime distinctio rerum iure, ipsum amet blanditiis aspernatur accusamus placeat optio at. Velit amet inventore nemo corporis. Animi, rerum commodi.',
    link: '',
  },
]
function AutoCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <>
      <section dir="ltr">
        <h1 className="text-center text-4xl font-semibold pb-4">Autoplay</h1>
        <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
          <SliderContainer className="gap-2">
            {slides.map((slide, i) => (
              <Slider key={i} className="w-full">
                <div className="dark:bg-black bg-white h-[400px] w-full">
                  <Image
                    src={slide.image}
                    width={1400}
                    height={800}
                    alt="image"
                    className="h-full object-cover rounded-lg w-full"
                  />
                </div>
              </Slider>
            ))}
          </SliderContainer>
          <div className="flex justify-center py-4">
            <SliderDotButton />
          </div>
        </Carousel>
      </section>
    </>
  )
}

export default AutoCarousel
