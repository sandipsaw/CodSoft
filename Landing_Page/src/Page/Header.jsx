import React from 'react'
import Nav from './Nav'
import image from '../image/student.png'
// import b from '../image/b.jpeg'
const Header = () => {
  return (
    <div>
        <Nav/>
        <div  className='mt-20 ml-20 mr-20 flex justify-center gap-10'>
            <div className='w-1/2'>
                <h1 style={{ fontFamily: 'Poppins, sans-serif,Rubik' }} className='text-7xl  font-medium flex text-zinc-800 '>Develop Your<br/> skill in a new<br/> and unique way</h1>
                <p className='text-lg mt-5'>Explore a Transformative approch to skill development on our online learning platform. Uncover a new realm of Learning Experience and evaluate your experience in a unique way.</p>
                <div className='mt-5 flex gap-10 text-lg'>
                    <div className='border pt-1 pb-1 pl-3 pr-3 rounded'>Enroll Now</div>
                    <div className='underline'>What's Etech?</div>
                </div>
            </div>
            <div> <img src={image} className=' w-110  border-dashed border-4 border-gray-500 p-3 rounded-full'/></div>
        </div>
        {/* <img src={b}/> */}


        <div className='px-8  flex flex-col w-full items-center lg:py-8 mt-5 py-4 md:py-6 gap-3 lg:gap-10  '>
        
        <div className='text-white grid lg:grid-cols-8 md:gap-5 gap-2 md:grid-cols-4 grid-cols-4 justify-items-center items-center'>
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg" alt="Volkswagen logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg" alt="Samsung logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg" alt="Vimeo logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg" alt="Procter &amp; Gamble logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg" alt="Hewlett Packard Enterprise logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg" alt="Citi logo" />
          <img className='lg:w-35 md:w-30 w-15 h-10 ' src="https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg" alt="Ericsson logo" />
        </div>
      </div>
    </div>
  )
}

export default Header