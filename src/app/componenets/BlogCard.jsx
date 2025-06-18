import React from 'react';
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

const BlogCard = ({ title, tags, date, image }) => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 px-4 py-6 text-justify lg:text-left'>
            {/* Image + Text container */}
            <div className='w-full flex flex-col sm:flex-col md:flex-row items-center gap-6'>

                {/* Image Section */}
                <div className='w-full sm:max-w-[300px] md:max-w-[420px] lg:max-w-[200px]'>
                    <img
                        src={image}
                        alt="blog.png"
                        className='object-cover w-full h-auto rounded-md'
                    />
                </div>

                {/* Text Section */}
                <div className='w-full text-center md:text-left'>
                    <p className={`${poppins.variable} font-poppins text-[#CBCBCB] text-[16px] sm:text-[18px] md:text-[20px] font-normal tracking-normal`}>
                        {date}
                    </p>
                    <h3 className={`${syne.variable} font-syne text-[#FFFFFF] font-semibold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[40px]`}>
                        {title}
                    </h3>
                    <div className='flex flex-wrap justify-center md:justify-start gap-2 mt-3'>
                        {tags.map((tag, idx) => (
                            <button
                                key={idx}
                                className='text-[#FFFFFF] font-semibold text-[11px] sm:text-[12px] md:text-[13px] leading-[100%] tracking-normal uppercase border border-white py-2 px-6 rounded-full cursor-pointer'
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Read Button */}
            <div className='mt-4 lg:mt-0'>
                <p className={`${syne.variable} font-syne text-[#010208] font-semibold text-[12px] sm:text-[13px] md:text-[14px] bg-white py-2 px-4 rounded-full`}>
                    Read
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
