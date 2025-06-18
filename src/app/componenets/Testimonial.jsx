'use client'

import React, { useEffect, useRef, useState } from 'react'
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

const testimonialData = [
  {
    name: 'Floyd Miles',
    company: 'eBay',
    image: '/testimonial.png',
    quote:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    name: 'Dianne Russell',
    company: 'PayPal',
    image: '/testimonial.png',
    quote:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
]

const Testimonial = () => {
  const headingRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const containerRef = useRef(null)

  const [index, setIndex] = useState(0)

  useEffect(() => {
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

    gsap.from(leftRef.current, {
      opacity: 0,
      x: -60,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: leftRef.current,
        start: 'top 90%',
      },
    })

    gsap.from(rightRef.current, {
      opacity: 0,
      x: 60,
      duration: 1,
      delay: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: rightRef.current,
        start: 'top 90%',
      },
    })
  }, [])

  const handleNext = () => {
    const next = (index + 1) % testimonialData.length
    animate(next, 'right')
  }

  const handleBack = () => {
    const prev = (index - 1 + testimonialData.length) % testimonialData.length
    animate(prev, 'left')
  }

  const animate = (newIndex, direction) => {
    const offset = direction === 'right' ? 100 : -100

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, xPercent: offset },
      { opacity: 1, xPercent: 0, duration: 0.5, ease: 'power2.out' }
    )

    setIndex(newIndex)
  }

  return (
    <div className='flex flex-col gap-12 lg:gap-8 px-8 lg:px-16 mt-20 overflow-x-hidden min-w-2xl'>
      <h3
        ref={headingRef}
        className={`${syne.variable} font-syne text-[#ffffff] flex items-center gap-2 text-[40px] font-bold leading-[100%] tracking-normal`}
      >
        <span>
          <img src='/star.png' alt='starpng' />
        </span>
        What they say
      </h3>

      <div
        ref={containerRef}
        className='flex flex-col justify-center gap-16 lg:gap-0 lg:items-center lg:flex-row lg:justify-between'
      >
        <div
          ref={leftRef}
          className='flex gap-4 items-center lg:justify-start lg:w-[40%]'
        >
          <div>
            <img src={testimonialData[index].image} alt='testimonial.png' />
          </div>
          <div>
            <h5
              className={`${syne.variable} font-syne text-[#FFFFFF] text-[24px] font-semibold leading-8 tracking-normal`}
            >
              {testimonialData[index].name}
            </h5>
            <p
              className={`${poppins.variable} font-poppins text-[#CBCBCB] font-normal text-[18px] tracking-0 text-center lg:text-start`}
            >
              {testimonialData[index].company}
            </p>
          </div>
        </div>

        <div ref={rightRef} className='lg:w-[60%] relative'>
          <h4
            className={`${syne.variable} font-syne text-[#FFFFFF] text-[32px] font-medium leading-10 tracking-normal`}
          >
            {testimonialData[index].quote}
          </h4>

          <img
            src='/testimonial1.png'
            alt='testimonial1.png'
            className='absolute top-[-2rem] left-0 w-[6rem] opacity-50 pointer-events-none'
          />

          <div className='flex gap-3 mt-4 px-8'>
            <img
              src='/testiicon1.png'
              alt='testiicon1.png'
              className='w-8 h-8 bg-[#CBCBCB] p-2 rounded-full cursor-pointer'
              onClick={handleBack}
            />
            <img
              src='/testicon2.png'
              alt='testiicon2.png'
              className='w-8 h-8 bg-[#CBCBCB] p-2 rounded-full cursor-pointer'
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
