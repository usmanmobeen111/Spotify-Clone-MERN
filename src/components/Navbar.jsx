import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-full cursor-pointer hidden md:block'>Explore Premium</p>
            <p className='bg-black text-white text-[15px] px-4 py-1 rounded-full cursor-pointer hidden md:block'>Install App</p>
            <p className='bg-rose-600 text-black w-7 h-7 rounded-full flex items-center justify-center'>U</p>

        </div>
    </div>

    <div className='flex items-center gap-2 mt-4'>
        <p className="cursor-pointer bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className="cursor-pointer bg-black text-white px-4 py-1 rounded-2xl">Music</p>
        <p className="cursor-pointer bg-black text-white px-4 py-1 rounded-2xl">Podcasts</p>
    </div>
    </>
  )
}

export default Navbar
