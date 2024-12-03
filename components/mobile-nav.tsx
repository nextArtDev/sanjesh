'use client'
import { useState } from 'react'
import { links } from './navbar'
import { cn } from '@/lib/utils'
import CustomBtn from './custom-btn/CustomBtn'
import Link from 'next/link'
import NavBtn from './nav-btn/navbtn'
import { usePathname } from 'next/navigation'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const toggle = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <>
      {/* <svg
        onClick={toggle}
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg> */}
      {/* <button
        onClick={toggle}
        className={cn(
          'z-50 toggle w-10 h-10 rounded-md p-1.5 ',
          open ? 'active' : ''
        )}
      >
        <span className="w-8 h-1 origin-center" />
      </button> */}
      <CustomBtn open={open} setOpen={setOpen} />
      <Menu open={open}>
        <MenuContainer>
          {links.map((link) => (
            <MenuItem key={link.id} href={link.link}>
              <NavBtn isActive={pathname === link.link} title={link.name} />
            </MenuItem>
          ))}
        </MenuContainer>
      </Menu>
    </>
  )
}

/* Logic*/
const style = {
  container: `  relative top-1/4 w-full text-center mt-8`,
  item: `text-3xl text-gray-400 cursor-pointer hover:text-white`,
  menu: {
    open: `h-full w-full `,
    close: `w-full h-0`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-background/40 backdrop-blur-md `,
  },
}

function Menu({
  children,
  open,
}: {
  children: React.ReactNode
  open: boolean
}) {
  return (
    <div
      className={`${style.menu.default} 
       ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  )
}

function MenuContainer({ children }: { children: React.ReactNode }) {
  return <div className={style.container}>{children}</div>
}

function MenuItem({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <div className="p-2 max-w-sm mx-auto">
      <Link href={href} className={style.item}>
        {children}
      </Link>
    </div>
  )
}
