import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { SliderContainer, Slider, SliderDotButton } from './Carousel'
import Image from 'next/image'
import { slides } from './AutoCarousel'
// import { imgPreview } from '@/components/website/constant'

type Props = {}

function SlideWrapper({}: Props) {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <section
      dir="ltr"
      className="w-full h-full flex flex-col md:flex-row items-center justify-evenly   rounded-2xl bg-[#e0e0e0] "
      style={{
        boxShadow: '11px 11px 39px #949494, -11px -11px 39px #ffffff',
      }}
    >
      <Carousel
        options={OPTIONS}
        isAutoPlay={true}
        className="w-[400px]  aspect-square  mx-auto"
      >
        <SliderContainer className="gap-2 shadow-['11px_11px_22px_#a4a4a4,-11px_-11px_22px_#ffffff']">
          {slides.map((slide, i) => (
            <Slider
              key={i}
              className="p-4 shadow-['11px_11px_22px_#a4a4a4,-11px_-11px_22px_#ffffff'] w-full h-full "
            >
              <figure
                style={{
                  boxShadow: '11px 11px 39px #949494, -11px -11px 39px #ffffff',
                }}
                className="relative  aspect-square w-full  mx-auto  rounded-2xl bg-[#e0e0e0]  overflow-hidden p-6"
              >
                <Image
                  src={slide.image}
                  fill
                  alt="image"
                  className="  h-full object-contain rounded-lg w-full p-2  "
                />
              </figure>
            </Slider>
          ))}
        </SliderContainer>
        {/* <div className="flex justify-center py-4">
            <SliderDotButton />
          </div> */}
      </Carousel>

      <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
        <SliderContainer className="gap-2">
          {slides.map((slide, i) => (
            <Slider key={i} className="w-full">
              <p className="text-xl font-semibold text-black/80 ">{i}</p>
              <button
                style={{
                  boxShadow: '5px 5px 10px #b6a9a9, -5px -5px 10px #ffffff',
                }}
                className="text-red-600 px-4 py-2 rounded-2xl "
              >
                Read More
              </button>
            </Slider>
          ))}
        </SliderContainer>
        {/* <div className="flex justify-center py-4">
          <SliderDotButton />
        </div> */}
      </Carousel>
    </section>
  )
}

export default SlideWrapper
