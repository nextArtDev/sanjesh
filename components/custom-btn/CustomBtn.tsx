'use client'
import React from 'react'
import style from './CustomBtn.module.scss'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
type Props = {
  open: boolean
  setOpen: (prev: boolean) => void
}

function CustomBtn({ open, setOpen }: Props) {
  return (
    <section className="md:hidden fixed top-3 right-4  w-fit h-fit z-20">
      <div className={cn(style.toggle, 'w-[60px] h-[60px]')}>
        <input onClick={() => setOpen(!open)} type="checkbox" />
        <button
          className={cn(
            style.button,
            open ? 'relative rounded-full' : 'rounded-md'
          )}
        >
          {/* <span className={style.label}>☼</span> */}

          <motion.div
            animate={open ? 'open' : 'closed'}
            className={cn(
              style.label,
              'absolute top-[35%] opacity-90 left-[30%]'
            )}
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <motion.path
                layoutId="line"
                animate={
                  open ? "d: 'M 3 16.5 L 17 2.5'" : " d: 'M 2 2.5 L 20 2.5'"
                }
                strokeWidth="3"
                className={'dark:!stroke-white'}
                stroke={open ? 'red' : 'black '}
                strokeLinecap="round"
                d={open ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}
              />
              <motion.path
                strokeWidth="3"
                className={'dark:!stroke-white'}
                stroke="black "
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                opacity={open ? 0 : 1}
              />
              <motion.path
                layoutId="line"
                strokeWidth="3"
                className={'dark:!stroke-white'}
                stroke={open ? 'red' : 'black '}
                strokeLinecap="round"
                d={open ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346'}
              />
            </svg>
          </motion.div>
        </button>
      </div>
    </section>
  )
}

export default CustomBtn
