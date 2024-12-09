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
    image: '/images/25.jpg',
    text: 'به کودکانی استثنایی گفته می‌شود که بر خلاف اکثریت افراد هم سن خود در شرایط عادی قادر به سازگاری با محیط نباشند و از نظر فکری، عقلانی، رفتاری و عاطفی با هم سالان خود فرق کلی داشته باشند و روش های خاص آموزش و پرورش درباره آن ها به کار رود. ',
    link: '',
  },
  {
    id: 2,
    image: '/images/26.jpg',
    text: 'به کودکانی استثنایی گفته می‌شود که بر خلاف اکثریت افراد هم سن خود در شرایط عادی قادر به سازگاری با محیط نباشند و از نظر فکری، عقلانی، رفتاری و عاطفی با هم سالان خود فرق کلی داشته باشند و روش های خاص آموزش و پرورش درباره آن ها به کار رود. ',
    link: '',
  },
  {
    id: 3,
    image: '/images/27.jpg',
    text: 'به کودکانی استثنایی گفته می‌شود که بر خلاف اکثریت افراد هم سن خود در شرایط عادی قادر به سازگاری با محیط نباشند و از نظر فکری، عقلانی، رفتاری و عاطفی با هم سالان خود فرق کلی داشته باشند و روش های خاص آموزش و پرورش درباره آن ها به کار رود. ',
    link: '',
  },
  {
    id: 4,
    image: '/images/28.jpg',
    text: 'به کودکانی استثنایی گفته می‌شود که بر خلاف اکثریت افراد هم سن خود در شرایط عادی قادر به سازگاری با محیط نباشند و از نظر فکری، عقلانی، رفتاری و عاطفی با هم سالان خود فرق کلی داشته باشند و روش های خاص آموزش و پرورش درباره آن ها به کار رود. ',
    link: '',
  },
]
function AutoCarousel() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    // watchDrag: false,
    // watchResize: false,
    // watchSlides: false,
    // watchFocus: false,
    // axis: 'x',
    // direction: 'rtl',
  }

  return (
    <>
      <section dir="ltr">
        <h1 className="text-center text-4xl font-semibold pb-4">Autoplay</h1>
        <Carousel options={OPTIONS} isAutoPlay={true} className="w-4/5 mx-auto">
          <SliderContainer className="gap-2">
            {slides.map((slide, i) => (
              <Slider key={i} className="w-full">
                <div className="  h-[400px] w-full">
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
