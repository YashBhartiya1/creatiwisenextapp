'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Syne } from 'next/font/google'
import { Poppins } from 'next/font/google'
import ExperienceCard from './ExperienceCard'
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

const experienceData = [
  {
    title: 'Lead Product Designer',
    text: 'Fortknox',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'Intern Designer',
    text: 'OmniSafe',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'UI Designer',
    text: 'Doradesign',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'Frontend Developer',
    text: 'OpacityAuthor',
    date: 'Mar 2022 - Oct 2023',
  },
]

const Experience = () => {
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Heading animation
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

    // Animate each ExperienceCard
    cardsRef.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        delay: i * 0.2,
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
    <div id='experience' className='flex flex-col gap-8 px-16 mt-20 min-w-2xl'>
      <h3
        ref={headingRef}
        className={`${syne.variable} font-syne text-[#ffffff] flex items-center gap-2 text-[40px] font-bold leading-[100%] tracking-normal`}
      >
        <span>
          <img src='/Star.png' alt='starpng' />
        </span>
        Experience
      </h3>

      {/* Experience Cards */}
      <div className='flex flex-col gap-6'>
        {experienceData.map((card, index) => (
          <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <ExperienceCard
              title={card.title}
              text={card.text}
              date={card.date}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
