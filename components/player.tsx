import Image from 'next/image'
import React from 'react'
import Profile from '../public/45.avif'
type Props = {}

function Player({}: Props) {
  return (
    <section
      className="flex flex-col items-center justify-evenly w-[320px] h-[500px] rounded-2xl bg-[#e0e0e0] "
      style={{
        boxShadow: '11px 11px 39px #949494, -11px -11px 39px #ffffff',
      }}
    >
      <figure
        style={{
          boxShadow: '11px 11px 22px #a4a4a4, -11px -11px 22px #ffffff',
        }}
        className="relative w-[80%] aspect-square m-11 rounded-full bg-[#e0e0e0]  overflow-hidden"
      >
        <Image
          fill
          src={Profile}
          alt=""
          className=" mix-blend-plus-darker p-4 rounded-full"
        />
      </figure>
      <p className="text-xl font-semibold text-black/80 ">خانم رضوانی</p>
      <button
        style={{
          boxShadow: '5px 5px 10px #b6a9a9, -5px -5px 10px #ffffff',
        }}
        className="text-red-600 px-4 py-2 rounded-2xl "
      >
        Read More
      </button>
    </section>
  )
}

export default Player
