'use client'

import React, { useEffect, useRef } from 'react'
import { Syne } from 'next/font/google'
import { Poppins } from 'next/font/google'
import BlogCard from './BlogCard'
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

const BlogData = [
    {
        title: 'How UX works in web',
        date: 'Nov 9, 2023',
        tags: ['ui', 'ux'],
        image: '/blog1.png',
    },
    {
        title: 'Case study - Analysis Application.',
        date: 'Aug 18, 2023',
        tags: ['design', 'print'],
        image: '/blog2.png',
    },
    {
        title: '3 ways to develop your skill',
        date: 'Feb 16, 2023',
        tags: ['figma', 'web'],
        image: '/blog3.png',
    },
]

const Blog = () => {
    const headingRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        // Heading Animation
        gsap.from(headingRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: headingRef.current,
                start: 'top 85%',
            },
        })

        // Cards Animation
        cardsRef.current.forEach((el, index) => {
            gsap.from(el, {
                opacity: 0,
                y: 60,
                duration: 1,
                delay: index * 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
            })
        })
    }, [])

    return (
        <>
            <div className='flex flex-col gap-8 px-16 mt-20 min-w-2xl'>
                <div
                    className='flex items-center justify-between'
                    ref={headingRef}
                >
                    <h3
                        className={`${syne.variable} font-syne text-[#ffffff] flex items-center gap-2 text-[40px] font-bold leading-[100%] tracking-normal`}
                    >
                        <span>
                            <img src='/star.png' alt='starpng' />
                        </span>
                        Blog
                    </h3>
                    <p
                        className={`${syne.variable} font-syne text-[#ffffff] text-[18px] font-medium tracking-normal underline underline-offset-4`}
                    >
                        view all
                    </p>
                </div>

                {/* Blog cards */}
                <div className='flex flex-col gap-6'>
                    {BlogData.map((card, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                        >
                            <BlogCard
                                title={card.title}
                                tags={card.tags}
                                date={card.date}
                                image={card.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog
