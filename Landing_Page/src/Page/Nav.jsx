import React from 'react'
import { CgChevronDown } from "react-icons/cg";
const Nav = () => {
  return (
    <div>
        <nav className='text-xl flex gap-50 justify-center items-center pt-5'>
            <div className='text-3xl bold'>Etech.</div>
            <div className='flex gap-10'>
                <div className='gap-1 flex items-end'>Courses <CgChevronDown/></div>
                <div className='gap-1 flex items-end'>Teacher <CgChevronDown/></div>
                <div className='gap-1 flex items-end'>Offers <CgChevronDown/></div>
                <div className='gap-1 flex items-end'>Contact <CgChevronDown/></div>
            </div>
            <div className='flex gap-5'>
                <div className='border pt-1 pb-1 pl-3 pr-3 rounded'>Sign In</div>
                <div className='border pt-1 pb-1 pl-3 pr-3 rounded'>Free Trial</div>
            </div>
        </nav>
    </div>
  )
}

export default Nav