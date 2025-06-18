'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Marquee = () => {
    const marqueeRef = useRef(null)

    const images = [
        '/footer1.png',
        '/Star.png',
        '/footer2.png',
        '/Star.png',
        '/footer3.png',
        '/Star.png',
        '/footer4.png',
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current
            const totalWidth = marquee.scrollWidth / 2

            gsap.to(marquee, {
                x: -totalWidth,
                duration: 10,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
                },
            })
        }, marqueeRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className='overflow-hidden mt-20 min-w-2xl'>
            <div ref={marqueeRef} className='flex items-center gap-8 w-max'>
                {/* Render two copies for infinite scroll */}
                {[...images, ...images].map((src, index) => (
                    <img src={src} alt={`img-${index}`} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Marquee
