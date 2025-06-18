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

const Faqs = () => {
    const headingRef = useRef(null)
    const q1Ref = useRef(null)
    const q2Ref = useRef(null)
    const q3Ref = useRef(null)

    useEffect(() => {
        // Animate heading
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

        // Animate Q1
        gsap.from(q1Ref.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: q1Ref.current,
                start: 'top 90%',
            },
        })

        // Animate Q2
        gsap.from(q2Ref.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: q2Ref.current,
                start: 'top 90%',
            },
        })

        // Animate Q3
        gsap.from(q3Ref.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: q3Ref.current,
                start: 'top 90%',
            },
        })
    }, [])

    return (
        <div className='flex flex-col gap-12 lg:gap-8 px-8 lg:px-16 mt-20 min-w-2xl'>
            <h3
                ref={headingRef}
                className={`${syne.variable} font-syne text-[#ffffff] flex items-center gap-2 text-[40px] font-bold leading-[100%] tracking-normal`}
            >
                <span>
                    <img src='/Star.png' alt='starpng' />
                </span>
                Frequently asked questions
            </h3>

            <div>
                <div ref={q1Ref}>
                    <h4
                        className={`${syne.variable} font-syne text-[#FFFFFF] font-medium text-[32px] leading-[40px] mb-2`}
                    >
                        What is your design process?
                    </h4>
                    <p
                        className={`${poppins.variable} font-poppins text-[#CBCBCB] text-[18px] font-normal tracking-normal mb-4`}
                    >
                        My design process typically involves four key phases: research,
                        design, prototype, and test. In the research phase, I gather
                        insights about the user and their needs. In the design phase, I
                        create wireframes and visual designs that meet those needs. In the
                        prototype phase, I create interactive models of the design for
                        testing. In the test phase, I collect feedback from users to refine
                        the design.
                    </p>
                </div>

                <div ref={q2Ref}>
                    <h4
                        className={`${syne.variable} font-syne text-[#FFFFFF] text-[32px] leading-[40px] tracking-normal font-medium mb-4`}
                    >
                        What tools and software do you use for UX design?
                    </h4>
                </div>

                <div ref={q3Ref}>
                    <h4
                        className={`${syne.variable} font-syne text-[#FFFFFF] text-[32px] leading-[40px] tracking-normal font-medium`}
                    >
                        How do you measure the success of your UX designs?
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Faqs
