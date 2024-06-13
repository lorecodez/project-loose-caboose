'use client'
import React from 'react'
import Image from 'next/image'
import Store from '@/public/loose-caboose-store.jpg'

export default function Hero() {
  return (
    <section id='home' className='flex items-center w-full h-full px-6 py-3 '>
      <aside className='w-1/2 flex flex-col items-start justify-center gap-7'>
        <h1 className='font-bold text-8xl text-amber-950'>
          Trains, Hobbies, and More ...
        </h1>
        <p className='text-2xl font-bold w-2/3'>
          Visit us on 820 3rd Street in Napa, CA at the corner of 3rd and Soscol Ave.
        </p>
        <button
        onClick={() =>{
          const element = document.getElementById('contact')
          element?.scrollIntoView({
            behavior: 'smooth'
          })
        }} 
        className='px-6 py-3 rounded-full bg-red-600 text-stone-50 text-5xl shadow-xl font-bold hover:bg-orange-500 duration-200 transition-all ease-linear'
        >
          Contact Us
        </button>
        <button
        onClick={() =>{
          const element = document.getElementById('schedule')
          element?.scrollIntoView({
            behavior: 'smooth'
          })
        }}
        className='px-6 py-3 rounded-full bg-amber-950 text-stone-50 text-5xl shadow-xl font-bold hover:bg-orange-500 duration-200 transition-all ease-linear'
        >
          View schedule
        </button>
        
      </aside>
      <picture className='w-1/2 rounded-t-full rounded-b-2xl relative flex items-center justify-center my-3 border-4 border-yellow-300'>
        <Image
        src={Store} 
        alt='Loose Caboose Napa hobby store'
        title='Loose Caboose Napa Hobby Store'
        width={500}
        height={300}
        className='w-full object-cover rounded-t-full shadow-inner'
        />
       
      </picture>
    </section>
  )
}