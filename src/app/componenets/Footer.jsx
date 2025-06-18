'use client'

import React, { useEffect, useRef } from 'react'
import { Syne } from 'next/font/google'
import { Poppins } from 'next/font/google'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const syne = Syne({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-syne',
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-poppins',
})

const Footer = () => {
    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const emailRef = useRef(null)
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
            })

            tl.from(headingRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
            })
                .from(
                    emailRef.current,
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                        ease: 'power3.out',
                    },
                    '-=0.4'
                )
                .from(
                    [leftRef.current, rightRef.current],
                    {
                        opacity: 0,
                        y: 20,
                        stagger: 0.2,
                        duration: 0.6,
                        ease: 'power3.out',
                    },
                    '-=0.5'
                )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className='flex flex-col gap-6 mt-20 pb-4 min-w-2xl'
        >
            <h1
                ref={headingRef}
                className={`${syne.variable} font-syne text-[#FFFFFF] text-[64px] font-extrabold leading-[80px] uppercase tracking-normal text-center`}
            >
                LET'S TALK!
            </h1>
            <p
                ref={emailRef}
                className={`${poppins.variable} font-poppins text-[#FFFFFF] text-[18px] font-normal tracking-normal text-center flex justify-center items-center gap-2`}>
                rehanurraihan@gmail.com <span><img src="/footer5.png" alt="footer5.png" /></span>
            </p>
            <div className='flex flex-col lg:flex-row items-center justify-between px-16'>
                <p
                    ref={leftRef}
                    className={`${syne.variable} font-syne text-[#FFFFFF] text-[14px] leading-[20px] tracking-normal`}
                >
                    © Rehan Raihan - 2023
                </p>
                <div
                    ref={rightRef}
                    className='flex gap-6'
                >
                    <p
                        className={`${syne.variable} font-syne text-[#FFFFFF] font-normal text-[14px] leading-[20px] tracking-normal`}
                    >
                        Dribbble
                    </p>
                    <p
                        className={`${syne.variable} font-syne text-[#FFFFFF] font-normal text-[14px] leading-[20px] tracking-normal`}
                    >
                        Behance
                    </p>
                    <p
                        className={`${syne.variable} font-syne text-[#FFFFFF] font-normal text-[14px] leading-[20px] tracking-normal`}
                    >
                        Twitter
                    </p>
                    <p
                        className={`${syne.variable} font-syne text-[#FFFFFF] font-normal text-[14px] leading-[20px] tracking-normal`}
                    >
                        Instagram
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
