import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel, { SliderContainer, Slider, SliderDotButton } from './Carousel'
import Image from 'next/image'
import { slides } from './AutoCarousel'
// import { imgPreview } from '@/components/website/constant'

type Props = {}

function SlideWrapper({}: Props) {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    watchDrag: false,
    watchResize: false,
    watchSlides: false,
    watchFocus: false,
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
      <div className="absolute w-full h-full top-0 left-0 inset-0 bg-transparent   z-10 " />
      <Carousel options={OPTIONS} isAutoPlay={true} className="   ">
        <SliderContainer className="gap-4  ">
          {slides.map((slide, i) => (
            <Slider key={i} className="p-4 w-full mx-auto">
              <div className="grid grid-cols-1 place-content-center place-items-center gap-8 md:grid-cols-2 ">
                <div className="flex flex-col gap-2">
                  <button className="text-[#b3ff00] text-2xl px-4 py-2 rounded-md shadow-[inset_11px_11px_39px_#949494,-11px_-11px_39px_#ffffff] dark:shadow-[5px_5px_25px_#ffffff15,-5px_-5px_5px_#e7e7e742]">
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
                  <p className="text-xl text-foreground/80 px-4 py-2 rounded-md font-semibold   shadow-[inset_11px_11px_39px_#949494,-11px_-11px_39px_#ffffff] dark:shadow-[5px_5px_25px_#ffffff15,-5px_-5px_5px_#e7e7e742]">
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
