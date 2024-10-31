import Image from 'next/image'
import React, { useEffect } from 'react'
import b1 from "@/public/a3.jpg"
import { PiGreaterThan } from "react-icons/pi";
import AOS from 'aos';
function About() {

    useEffect(()=>{
        AOS.init()
    })
  
  return (
    <div data-aos="fade-up" className='flex  z-20 flex-col gap-5 px-10 py-14 sm:px-24'>
        <div className='w-[100px] border-b-8 pb-2 border-blue-500'> 
            <h1 className='font-bold text-blue-500 text-[25px]'>About</h1>
           
        </div>
        <div>
            <p className='text-[14px]'>
            I'm Abhishek, a passionate and dedicated Full Stack Developer with a strong foundation in both front-end and
back-end technologies. With expertise in JavaScript, Python, React.js, and Next.js, I enjoy crafting intuitive,
responsive web applications that offer seamless user experiences. My work spans from founding an IT
service-based startup to developing complex trading apps, where I've consistently demonstrated my ability to
lead projects from conception to deployment. I am constantly seeking to improve my skills and knowledge,
with a particular interest in ethical hacking and cybersecurity.

            </p>
        </div>
        <div className='flex flex-col items-center gap-10 lg:flex-row'>
        <div>
            <Image src={b1} alt='profile photo' className='h-[300px] object-cover max-w-[400px]'/>
        </div>
        <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-[25px] text-blue-500'>Ethical Hacker & Web Developer</h2>
            <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold'>Birthday:</p>
                    <p>10 August 2003</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold'>Website:</p>
                    <a href="https://github.com/The-Abhishek1" className='underline text-blue-600'>https://github.com/The-Abhishek1</a>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold'>Phone:</p>
                    <p>+91 6366652685</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold'>City:</p>
                    <p>Bangalore, Karnataka</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold'>Age:</p>
                    <p>21</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold'>Degree:</p>
                    <p>Master of Computer Applications (CyberSecurity)</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold'>Email:</p>
                    <p>idiot63666@gmail.com</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold'>Freelance:</p>
                    <p>Available</p>
                </div>
            </div>
            </div>    
        </div>
        <p className='text-[14px]'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. 
            Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. 
            Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</p>
    </div>
  )
}

export default About