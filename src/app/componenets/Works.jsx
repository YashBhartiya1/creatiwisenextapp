'use client'

import React, { useRef, useEffect } from 'react'
import { Syne } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from './Card'

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

const cardData = [
    {
        title: 'Analysis Application',
        description: 'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
        image: '/card1.png',
        tags: ['figma', 'ux'],
    },
    {
        title: 'Fortknox Application',
        description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
        image: '/card2.png',
        tags: ['mobile', 'web'],
    },
    {
        title: 'Zenocide Application',
        description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
        image: '/card3.png',
        tags: ['app', 'web'],
    },
]

const Works = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        // Animate section title
        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
            },
        })

        // Animate each card independently as it enters the viewport
        cardsRef.current.forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                delay: i * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            })
        })
    }, [])

    return (
        <div id='works' className='flex flex-col gap-8 px-16 mt-20 min-w-2xl'>
            {/* Section Heading */}
            <div ref={sectionRef} className='flex items-center justify-between'>
                <h3 className={`${syne.variable} font-syne text-[#ffffff] flex items-center gap-2 text-[40px] font-bold leading-[100%] tracking-normal`}>
                    <span>
                        <img src='/star.png' alt='starpng' />
                    </span>
                    Works
                </h3>
                <p className={`${syne.variable} font-syne text-[#ffffff] text-[18px] font-medium tracking-normal underline underline-offset-4`}>
                    view all
                </p>
            </div>

            {/* Cards Section */}
            <div className='flex flex-col gap-6'>
                {cardData.map((card, index) => (
                    <div key={index} ref={el => (cardsRef.current[index] = el)}>
                        <Card
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            tags={card.tags}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works
