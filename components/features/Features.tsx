import React from 'react'
import NoAvar from '../../public/icons/1416745.png'
import NoAmooz from '../../public/icons/11906230.png'
import DaneshAmooz from '../../public/icons/1638468.png'
import Yadgiri from '../../public/icons/2650110.png'
import Image from 'next/image'
type Props = {}

const items = [
  { id: '1', name: 'سنجش نوآورانه', icon: NoAvar },
  { id: '2', name: 'مداخله نوآموزان', icon: NoAmooz },
  { id: '3', name: 'مداخله دانش‌آموزان', icon: DaneshAmooz },
  { id: '4', name: 'اختلالات یادگیری', icon: Yadgiri },
]
function Features({}: Props) {
  return (
    <section className="w-full my-16 px-3 md:px-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="nev-btn hover:grayscale-[1] h-[200px] p-4 pt-8 flex flex-col items-center justify-center gap-1.5"
        >
          <p className="text-center text-base md:text-lg opacity-75 font-semibold ">
            {item.name}
          </p>
          <figure className="shrink-0 relative w-full h-full  rounded-md">
            <Image
              src={item.icon.src}
              fill
              alt={item.name}
              className="object-contain p-2"
            />
          </figure>
        </div>
      ))}
    </section>
  )
}

export default Features
