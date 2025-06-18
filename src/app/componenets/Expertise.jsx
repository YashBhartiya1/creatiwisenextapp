'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Syne } from 'next/font/google'
import { Poppins } from 'next/font/google'

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

const Expertise = () => {
    const sectionRef = useRef(null)
    const cardRefs = useRef([])

    useEffect(() => {
        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        })

        gsap.from(cardRefs.current, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        })
    }, [])

    return (
        <div
            ref={sectionRef}
            className='flex flex-col gap-8 px-16 mt-20 min-w-2xl'>
            <div>
                <h3
                    className={`${syne.variable} font-syne text-[#ffffff] flex items-center gap-2 text-[40px] font-bold leading-[100%] tracking-normal`}
                >
                    <span>
                        <img src="/star.png" alt="starpng" />
                    </span>
                    Expertise
                </h3>
            </div>
            <div className='grid md:grid-cols-2 gap-12'>
                {[
                    {
                        title: 'Branding',
                        desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
                    },
                    {
                        title: 'UI Design',
                        desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
                    },
                    {
                        title: 'UX Design',
                        desc: 'I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements',
                    },
                    {
                        title: 'Development',
                        desc: 'I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.',
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className='flex flex-col gap-2'
                    >
                        <h5
                            className={`${syne.variable} font-syne text-[#ffffff] flex items-center gap-2`}
                        >
                            <span>
                                <img src="/vector.png" alt="vector" />
                            </span>{' '}
                            {item.title}
                        </h5>
                        <p
                            className={`${poppins.variable} font-poppins text-[16px] font-normal tracking-normal text-[#CBCBCB]`}
                        >
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Expertise

