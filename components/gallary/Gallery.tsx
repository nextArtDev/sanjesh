import { cn } from '@/lib/utils'
import React from 'react'
import style from './Gallery.module.scss'
import Image from 'next/image'
import TempImage from '../../public/45.avif'
type Props = {}
//https://codepen.io/nicole-sen/pen/vYVNOVm?
const galleryImages = [
  { id: '1', src: TempImage, description: 'توضیح عکس' },
  { id: '2', src: TempImage, description: 'توضیح عکس' },
  { id: '3', src: TempImage, description: 'توضیح عکس' },
  { id: '4', src: TempImage, description: 'توضیح عکس' },
  { id: '5', src: TempImage, description: 'توضیح عکس' },
  { id: '6', src: TempImage, description: 'توضیح عکس' },
]
function Gallery({}: Props) {
  return (
    <div>
      <div className="max-w-[80vw] my-20 mx-auto">
        <section
          className={cn('[columns:"200px"] ', style.gallery)}
          id="gallery"
        >
          {galleryImages.map((item) => (
            <figure
              key={item.id}
              className={cn(
                'relative mb-10 rounded-md w-full shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] dark:shadow-[inset_15px_15px_2px_#ffffff15,inset_-15px_-15px_1px_#e7e7e742]  h-[300px] border-opacity-55',
                style.frame
              )}
            >
              <Image
                fill
                src={item.src}
                alt="by Steve Johnson"
                className="w-full p-3  object-cover img shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] dark:shadow-[inset_15px_15px_2px_#ffffff15,inset_-15px_-15px_1px_#e7e7e742]"
              />
              <div className="absolute -bottom-6 text-center w-full text-sm ">
                {item.description}
              </div>
            </figure>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Gallery
