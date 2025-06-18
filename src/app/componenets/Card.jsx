import React from 'react'
import { Syne } from 'next/font/google';
import { Poppins } from 'next/font/google';

const syne = Syne({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-syne',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-poppins',
});

const Card = ({ title, description, image, tags }) => {
    return (
        <div
            id='card_1'
            className='flex flex-col md:flex-row gap-6 md:gap-8 bg-[#CBCBCB7A] p-6 md:p-8 rounded-[40px] relative w-full'
        >
            {/* Ellipse */}
            <div className='absolute bottom-0 z-10 flex justify-center'>
                <img src="/Ellipse.png" alt="Ellipse" />
            </div>

            {/* card img */}
            <div className='flex justify-center md:justify-start'>
                <img src={image} alt="card1.png" className='w-[300px] sm:w-[350px] lg:w-[500px]'/>
            </div>

            {/* card text */}
            <div className='flex flex-col justify-between text-center md:text-left'>
                <div>
                    <h3 className={`${syne.variable} font-syne text-[#FFFFFF] font-semibold text-[40px] leading-[100%] tracking-normal`}>
                        {title}
                    </h3>
                    <p className={`${poppins.variable} font-poppins text-[#FFFFFF] font-normal text-[18px] tracking-normal mt-4`}>
                        {description}
                    </p>
                    <div className='flex flex-wrap justify-center md:justify-start gap-2 mt-3'>
                        {tags.map((tag, idx) => (
                            <button
                                key={idx}
                                className='text-[#FFFFFF] font-semibold text-[12px] leading-[100%] tracking-normal uppercase border-2 py-2 px-6 rounded-full cursor-pointer'
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='mt-4'>
                    <button
                        className={`${syne.variable} font-syne text-[#010208] font-semibold text-[14px] leading-6 tracking-normal bg-[#FFFFFF] py-3 px-6 rounded-full`}
                    >
                        View Case Study
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Card
