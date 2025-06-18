'use client'

import React, { useEffect, useRef } from 'react'
import { Poppins } from 'next/font/google'
import gsap from 'gsap'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-poppins',
})

const Frame = () => {
    const containerRef = useRef(null)
    const imageRefs = useRef([])
    const textRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 })

        // Animate icons with slight stagger
        tl.from(imageRefs.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.15,
        })

        // Animate text after icons
        tl.from(textRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
        })
    }, [])

    return (
        <div
            ref={containerRef}
            className='flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 mt-10 lg:mt-20 gap-6 min-w-2xl'
        >
            <div className='flex justify-center lg:justify-between items-center w-full lg:w-1/2 gap-4'>
                <img
                    ref={el => (imageRefs.current[0] = el)}
                    src="/banner3.png"
                    alt="banner3img"
                    className='w-[70px] sm:w-[90px] md:w-[100px] lg:w-[120px] h-auto'
                />
                <img
                    ref={el => (imageRefs.current[1] = el)}
                    src="/banner4.png"
                    alt="banner4img"
                    className='w-[70px] sm:w-[90px] md:w-[100px] lg:w-[120px] h-auto'
                />
                <img
                    ref={el => (imageRefs.current[2] = el)}
                    src="/banner5.png"
                    alt="banner5img"
                    className='w-[70px] sm:w-[90px] md:w-[100px] lg:w-[120px] h-auto'
                />
            </div>

            <div
                ref={textRef}
                className={`${poppins.variable} font-poppins w-full lg:w-[44%] text-center lg:text-left`}
            >
                <p className='text-[#CBCBCB] font-normal leading-snug text-[14px] sm:text-[15px] md:text-[16px] px-2 sm:px-4'>
                    Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
                </p>
            </div>
        </div>
    )
}

export default Frame
