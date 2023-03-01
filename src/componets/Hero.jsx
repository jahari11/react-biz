import React from 'react'
import Typed from 'react-typed'


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2 text-xl'>Growing With Data Analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Grow with data</h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-3' strings={['BTB', 'BTC', 'SASS']} 
                typeSpeed={120} 
                backSpeed={140}
                loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-300'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
            <button className='bg-[#00df9a] w-[200px] rounded-lg mx-auto font-medium my-6 py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero