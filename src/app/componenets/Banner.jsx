'use client'

import React, { useEffect, useRef } from 'react'
import { Syne } from 'next/font/google'
import gsap from 'gsap'

const syne = Syne({
    subsets: ['latin'],
    weight: ['800'],
    variable: '--font-syne',
})

const Banner = () => {
    const bannerRef = useRef(null)
    const textLinesRef = useRef([])

    useEffect(() => {
        const bannerTl = gsap.timeline({
            delay: 0.5// Wait for navbar animation to complete (adjust if needed)
        })

        bannerTl.from(textLinesRef.current, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            ease: 'power2.out',
            duration: 1
        })
    }, [])

    return (
        <div
            ref={bannerRef}
            className={`${syne.variable} font-syne text-center px-4 mt-20 min-w-2xl`}
        >
            <h1 className='text-white uppercase font-extrabold tracking-custom leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px]'>

                <div className='flex justify-center items-center flex-wrap gap-2'>
                    <span ref={el => textLinesRef.current[0] = el}>I AM A</span>
                    <span ref={el => textLinesRef.current[1] = el} className='inline-block w-10 sm:w-12 md:w-16 lg:w-28'>
                        <img src='/banner1.png' alt='bannerimg1' className='w-full h-auto' />
                    </span>
                    <span ref={el => textLinesRef.current[2] = el}>FREELANCE</span>
                </div>

                <div className='flex justify-center items-center flex-wrap gap-2 mt-2'>
                    <span ref={el => textLinesRef.current[3] = el}>DESIGNER</span>
                    <span ref={el => textLinesRef.current[4] = el} className='inline-block w-10 sm:w-12 md:w-16 lg:w-28'>
                        <img src='/banner2.png' alt='bannerimg2' className='w-full h-auto' />
                    </span>
                    <span ref={el => textLinesRef.current[5] = el}>FROM</span>
                </div>

                <div className='mt-2' ref={el => textLinesRef.current[6] = el}>
                    SAN FRANCISCO
                </div>
            </h1>
        </div>
    )
}

export default Banner
