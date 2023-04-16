import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-3' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                <h1 className='md:text-4xl sm:text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cum nemo ex minus, obcaecati, quas ad minima quidem dolor et delectus qui consectetur temporibus eius vitae nisi maxime sit voluptatibus.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-lg font-medium my-6 py-3 text-black mx-auto md:mx-0'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics