'use client'
import React from 'react'
import Image from 'next/image'
import Store from '@/public/loose-caboose-store.jpg'

export default function Hero() {
  return (
    <section className='flex items-center w-full h-full px-6 py-3 '>
      <aside className='w-1/2 flex flex-col items-start justify-center gap-7'>
        <h1 className='font-bold text-8xl'>
          Trains, Hobbies, and More ...
        </h1>
        <p className='text-2xl font-bold w-2/3'>
          Visit us on 820 3rd Street in Napa, CA at the corner of 3rd and Soscol Ave.
        </p>
        <button className='px-6 py-3 rounded-full bg-red-500 text-stone-50 text-5xl shadow-xl font-bold'>
          View schedule
        </button>
        
      </aside>
      <picture className='w-1/2 rounded-t-full relative flex items-center justify-center my-3 border-4 border-yellow-300'>
        <Image
        src={Store} 
        alt='Store front'
        width={500}
        height={300}
        className='w-full object-cover rounded-t-full shadow-inner'
        />
       
      </picture>
    </section>
  )
}