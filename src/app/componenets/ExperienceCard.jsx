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

const ExperienceCard = ({ title, text, date }) => {
    return (
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-[1.5px] border-[#ffffff40] pb-1 gap-5 sm:gap-0'>
            <div>
                <h4 className={`${syne.variable} font-syne text-[#FFFFFF] font-medium text-[32px] leading-10 tracking-normal`}>
                    {title}
                </h4>
            </div>
            <div className='flex flex-col sm:items-end gap-2'>
                <h5 className={`${syne.variable} font-syne text-[#ffffff] text-[24px] font-semibold leading-8 tracking-normal`}>
                    {text}
                </h5>
                <p className={`${poppins.variable} font-poppins text-[#FFFFFF] font-normal text-[18px] tracking-normal`}>
                    {date}
                </p>
            </div>
        </div>
    );
};

export default ExperienceCard
