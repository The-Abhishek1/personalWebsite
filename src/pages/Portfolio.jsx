import Image from 'next/image'
import React from 'react'
import i1 from "@/public/ai1.jpeg"
import i2 from "@/public/ai2.jpeg"
import i3 from "@/public/ai3.jpeg"
import i4 from "@/public/ai4.jpeg"
import i5 from "@/public/ai5.jpeg"
import i6 from "@/public/gi1.jpeg"
import i7 from "@/public/gi2.jpeg"
import i8 from "@/public/gi3.jpeg"
import i9 from "@/public/gi4.jpeg"
import i10 from "@/public/gi5.jpeg"
import i11 from "@/public/ii1.jpeg"
import i12 from "@/public/ii2.jpeg"
import i13 from "@/public/ii3.jpeg"
import i14 from "@/public/ii4.jpeg"
import i15 from "@/public/ii5.jpeg"
import i16 from "@/public/ii6.jpeg"
import i17 from "@/public/ii7.jpeg"
import i18 from "@/public/ii8.jpeg"

function Portfolio() {
  return (
    <div data-aos="fade-up" className='flex  z-20 flex-col gap-5 px-10 py-10 sm:px-24'>
        <div className='w-[120px] border-b-8 pb-2 border-blue-500'> 
            <h1 className='font-bold text-blue-500 text-[25px]'>Portfolio</h1> 
        </div>
        <div className=' flex flex-col gap-14'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                <h1 className='font-bold underline'>Ablaze Nova</h1>
                <a className='underline text-blue-600' href="https://ablaze-nova.vercel.app/">https://ablaze-nova.vercel.app/</a>
                </div>
                <p className='text-[14px]'>🚀 Established a startup offering IT services, including web and app development. Built the company website using Next.js and Firebase, focusing on responsive design 📱 and secure user authentication 🔒.</p>
                <div className='flex flex-row items-center mt-5  gap-5 flex-wrap justify-center'>
                <Image src={i1} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                <Image src={i2} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                <Image src={i3} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                <Image src={i4} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                <Image src={i5} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                <h1 className='font-bold underline'>German Silver</h1>
                <a className='underline text-blue-600' href="https://german-silver.vercel.app/">https://german-silver.vercel.app/</a>
                </div>
                <p className='text-[14px]'>🛒 Launched an e-commerce site specializing in German silver items, designing a user-friendly interface with secure payment gateways 💳, built on Next.js and Firebase.</p>
                <div className='flex flex-row items-center mt-5  gap-5 flex-wrap justify-center'>
                <Image src={i6} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                <Image src={i7} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                <Image src={i8} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                <Image src={i9} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                <Image src={i10} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold underline'>InvestWise</h1>
                <p className='text-[14px]'>🚀 Established a startup offering IT services, including web and app development. Built the company website using Next.js and Firebase, with a focus on responsive design 📱 and secure user authentication 🔒.</p>
           <div className='flex flex-row items-center mt-5 gap-5 flex-wrap justify-center'>
            <Image src={i11} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
            <Image src={i12} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
            <Image src={i13} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
            <Image src={i14} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
            <Image src={i15} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
            <Image src={i16} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
            <Image src={i17} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
            <Image src={i18} alt="Project Image" className='w-[160px] h-[160px] cursor-wait msmmm:w-[130px] msmmm:h-[130px] object-cover'/>
           </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio