'use client'
import Link from 'next/link'
import React from 'react'
import { MobileMenu } from './mobile-nav'
import NavBtn from './nav-btn/navbtn'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../public/disablesEducation.png'
export const links = [
  { id: 1, name: 'خانه', link: '/' },
  { id: 2, name: 'درباره ما', link: '/about' },
  { id: 3, name: 'خدمات', link: '/services' },
  { id: 4, name: 'ارتباط با ما', link: '/contact' },
]
type Props = {}

function Navbar({}: Props) {
  const pathname = usePathname()
  return (
    <div>
      <nav className="  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="absolute -z-10 inset-0 bg-transparent backdrop-blur-md nev-btn" />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ">
          <Link
            href="/"
            className="order-2 mr-auto relative aspect-square w-14 flex items-center space-x-3 dark:nev-btn dark:bg-foreground  dark:rounded-md"
          >
            <Image fill src={logo.src} className=" object-cover " alt="Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
          </Link>
          <div className="flex md:order-2  ">
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}

            <MobileMenu />
          </div>
          <div
            className="bg-transparent backdrop-blur-sm items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 "
              // <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    // className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    <NavBtn
                      title={link.name}
                      isActive={pathname === link.link}
                    />
                    {/* {link.name} */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
