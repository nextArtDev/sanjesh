import { cn } from '@/lib/utils'

import React from 'react'

type Props = {
  isActive?: boolean

  title?: string
}

function NavBtn({ isActive = false, title }: Props) {
  return (
    <section
      className={cn(
        'text-foreground/60 grid place-items-center px-3.5 py-2 rounded-md shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] dark:shadow-[inset_6px_6px_10px_-1px_rgba(0,0,0,0.85),inset_-6px_-6px_10px_-1px_rgba(255,255,255,0.1)] border hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] dark:hover:shadow-[4px_4px_6px_-1px_rgba(0,0,0,0.7),-4px_-4px_6px_-1px_rgba(255,255,255,0.1),-0.5px_-0.5px_0px_rgba(255,255,255,0.3),0.5px_0.5px_0px_rgba(0,0,0,0.75),0px_12px_10px_-10px_rgba(0,0,0,0.85)]  hover:transition-[all_300ms_cubic-bezier(0.23,1,0.32,1)]  font-semibold',
        isActive &&
          'text-[#0000ff] dark:text-[#b3ff00] border-[rgba(0,0,0,0.1)] translate-y-[1px] shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)]  dark:[border-[rgba(0,0,0,0.7)] dark:shadow-[4px_4px_6px_-1px_rgba(0,0,0,0.7),-4px_-4px_6px_-1px_rgba(255,255,255,0.1),-0.5px_-1px_0px_rgba(179,255,0,0.8),0.5px_1px_0px_rgba(0,0,0,0.75),0px_12px_10px_-10px_rgba(0,0,0,0.85)]'
      )}
      style={{
        transition: 'all 300ms cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <p className=" ">{title}</p>
    </section>
  )
}

export default NavBtn
