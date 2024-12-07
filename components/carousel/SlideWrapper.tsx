import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { SliderContainer, Slider, SliderDotButton } from './Carousel'
import Image from 'next/image'
import { slides } from './AutoCarousel'
import Meteors from '../Meteors'
// import { imgPreview } from '@/components/website/constant'

type Props = {}

function SlideWrapper({}: Props) {
  const OPTIONS: EmblaOptionsType = {
    loop: true,

    axis: 'x',

    dragFree: false,
  }
  return (
    <section
      dir="ltr"
      className="relative py-8 w-full h-full min-h-[70vh] md:min-h-[50vh]  rounded-md bg-background shadow-[11px_11px_39px_#949494,_-11px_-11px_22px_#ffffff] dark:shadow-[-5px_-5px_5px_#b3ff0088,5px_5px_5px_#00000052]"
      // style={{
      //   boxShadow: '11px 11px 39px #949494, -11px -11px 22px #ffffff',
      // }}
    >
      {/* <div className="absolute w-full h-full top-0 left-0 inset-0 bg-transparent   z-10 " /> */}
      <Carousel options={OPTIONS} isAutoPlay={true} className="   ">
        <SliderContainer className="gap-4  ">
          {slides.map((slide, i) => (
            <Slider key={i} className="p-4 w-full mx-auto">
              {/* <Meteors number={30} /> */}
              <div className="z-10 grid grid-cols-1 place-content-center place-items-center gap-8 md:grid-cols-2 ">
                <div className="flex flex-col gap-2">
                  <button className="text-[#3945f5] dark:text-[#b3ff00] text-2xl px-4 py-2 rounded-md shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] dark:shadow-[5px_5px_25px_#ffffff15,-5px_-5px_5px_#e7e7e742]">
                    عنوان خدمتی
                  </button>

                  <figure className="relative  w-full h-[45vh] flex-shrink-0 aspect-square  mx-auto  rounded-2xl  overflow-hidden p-4 shadow-[11px_11px_22px_#a4a4a4,-11px_-11px_22px_#ffffff80] dark:shadow-[11px_11px_22px_#ffffff15,-11px_-11px_22px_#e7e7e742]">
                    <Image
                      src={slide.image}
                      fill
                      alt="image"
                      className=" h-full object-contain 
                     rounded-2xl w-full p-3 mix-blend-multiply grayscale-[0] opacity-80"
                    />
                  </figure>
                </div>
                <div className="w-[80%] mx-auto max-w-md ">
                  <p className="text-xl  text-right text-foreground/80 px-4 py-2 rounded-md font-semibold  text-balance shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),_-1px_-1px_4px_rgba(255,255,255,0.5),inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-1px_-1px_4px_rgba(255,255,255,0.5)]">
                    {slide.text}
                  </p>
                </div>
              </div>
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
