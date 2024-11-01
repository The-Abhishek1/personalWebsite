import React from 'react'

function Skills() {
  return (
    <div className='flex flex-col text-[14px] gap-5 px-10 py-10 sm:px-24'>
        <div className='w-[80px] border-b-8 pb-2 border-blue-500'>
            <h1 className='font-bold text-blue-500  text-[25px]'>Skills</h1>
        </div>
        <img src="https://tryhackme-badges.s3.amazonaws.com/Idiot17.png" alt="Your Image Badge" />
        <p>🌐 Skilled in web development, cybersecurity, ethical hacking, and digital marketing with expertise in creating responsive websites, securing networks, and boosting online visibility. 
            💻 Proficient in front- and back-end frameworks like Next.js, Tailwind CSS, React, and problem-solving to ensure efficient, secure digital experiences. 🔒</p>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col items-start gap-2'>
                <h4>Ethical Hacking</h4>
                <div className='bg-gray-200 w-full h-[13px] rounded-full'>
                    <div className='bg-blue-400 w-[55%] h-[13px] rounded-full flex items-center justify-end'>
                        <h3 className='text-[11px] pr-5 text-white'>60%</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <h4>Web Development</h4>
                <div className='bg-gray-200 w-full h-[13px] rounded-full'>
                    <div className='bg-blue-400 items-center w-[70%] h-[13px] rounded-full flex justify-end'>
                        <h3 className='text-[11px] pr-5 text-white'>70%</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <h4>App Development</h4>
                <div className='bg-gray-200 w-full h-[13px] rounded-full'>
                    <div className='bg-blue-400 w-[50%] h-[13px] rounded-full flex items-center  justify-end'>
                        <h3 className='text-[11px] pr-5 text-white'>50%</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills