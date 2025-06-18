'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const navRef = useRef(null)
    const logoRef = useRef(null)
    const linksRef = useRef([])
    const buttonRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } })

        tl.from(logoRef.current, {
            x: -50,
            opacity: 0
        })
        tl.from(linksRef.current, {
            opacity: 0,
            y: -20,
            stagger: 0.15
        }, "-=0.3")
        tl.from(buttonRef.current, {
            scale: 0.8,
            opacity: 0
        }, "-=0.4")
    }, [])

    return (
        <>
            <div
                ref={navRef}
                className='flex justify-between items-center text-[#000000] py-8 px-16 text-[16px] min-w-2xl relative z-50'
            >
                <img
                    ref={logoRef}
                    src="/logo.png"
                    alt="logo"
                    className='cursor-pointer'
                />

                {/* Desktop Nav */}
                <ul className='hidden md:flex items-center gap-8'>
                    {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
                        <li
                            key={index}
                            ref={el => linksRef.current[index] = el}
                            className={item === 'Home' ? 'bg-[#ffff] py-2 px-6 rounded-full cursor-pointer' : 'text-white cursor-pointer'}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <button
                    ref={buttonRef}
                    className='text-white border-2 py-2 px-6 rounded-full cursor-pointer hidden md:block'
                >
                    HIRE ME
                </button>

                {/* Mobile menu icon - only visible when menu is closed */}
                {!isOpen && (
                    <div className='md:hidden'>
                        <button onClick={() => setIsOpen(true)}>
                            <CiMenuFries className='text-white text-3xl' />
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Fullscreen Menu */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-[#111] text-white flex flex-col items-center justify-center z-50 px-6 md:hidden">
                    {/* Close button */}
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
                        <IoMdClose className='text-white text-3xl' />
                    </button>

                    <ul className="flex flex-col items-center gap-6">
                        {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
                            <li
                                key={index}
                                className="bg-[#222] text-white py-3 px-6 rounded-full cursor-pointer text-[16px]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-8 text-white border-2 py-2 px-6 rounded-full">
                        HIRE ME
                    </button>
                </div>
            )}
        </>
    )
}

export default Navbar
