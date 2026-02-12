import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaVideo } from "react-icons/fa";
import child from '../image/child.jpg'
const benifit = () => {
    return (
        <div className=' ml-40 mr-40'>
            <h1 style={{ fontFamily: 'Poppins, sans-serif,Rubik' }} className='text-center text-3xl font-semibold text-gray-800 mt-15'>Search Courses</h1>
            <div className='flex justify-center gap-5 text-xl font-medium mt-5'>
                <div className='border rounded text-gray-600 pt-2 pb-2 pl-3 pr-15 flex items-center gap-2'> <IoSearchSharp />Search for over 50+ couses</div>
                <div className='border pt-1 pb-1 pl-3 pr-3 rounded'>Search</div>
            </div>

            <div className='flex justify-center mt-10 items-center'>
                <div className='w-1/2'><img src={child} className='w-140' /></div>
                <div className='w-1/2'>
                    <h1 style={{ fontFamily: 'Poppins, sans-serif,Rubik' }} className='text-4xl flex font-semibold'>
                        <span className='text-purple-500 mr-3'>Benifit</span> From our Online Learning</h1>
                    <div className='mt-5 gap-5 flex flex-col'>

                        <div className='flex gap-5 text-medium '>
                            <div className='text-5xl p-3 rounded-full'><FaGraduationCap/></div>
                            <div>
                                <h2 className='text-xl font-semibold'>Online Degrees</h2>
                                <p className='text-[18px] text-gray-700'>Earn accredited degree from the comport of your home. Opening door to a world of possiblities</p>
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div className='text-4xl p-3 rounded-full'><FaBookReader/></div>
                            <div>
                                <h2 className='text-xl font-semibold'>Short Courses</h2>
                                <p className='text-[18px] text-gray-700'>Enhance your skill with our concise and focused short courses, designed for quick and effective laerning.</p>
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div className='text-5xl p-3  '><PiStudentFill className=''/></div>
                            <div>
                                <h2 className='text-xl font-semibold'>Training From Experts</h2>
                                <p className='text-[18px] text-gray-700'>immerse yourselif in your knowledge with industry experts  guiding you through hands on experience</p>
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div className='text-3xl  rounded-full p-4'><FaVideo/></div>
                            <div>
                                <h2 className='text-xl font-semibold'>1.5k+ Video Courses</h2>
                                <p className='text-[18px] text-gray-700'>Dive into a vast library of other 1.5k video courses covering, many subject offering a visual learning experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default benifit