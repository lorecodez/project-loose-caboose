'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/loose-caboose-logo-no-bg.png';

export default function Head() {
  return (
    <div className='flex justify-start items-center w-full'>
        <picture>
          <Image
          src={Logo}
          title='Logo'
          alt='Logo'
          width={100}
          height={100}
          />
        </picture>
        <menu className='flex items-center gap-5 py-3 px-6 font-bold text-2xl'>
            <li className='hover:scale-105 transition-all duration-200 ease-in-out'>
              <button
              onClick={() =>{
                const element = document.getElementById('#')
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              title='Home'
              >
                Home
              </button>
            </li>
            <li className='hover:scale-105 transition-all duration-200 ease-in-out'>
              <button
              title='About'
              onClick={() =>{
                const element = document.getElementById('about')
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              >
                About
              </button>
            </li>
            <li className='hover:scale-105 transition-all duration-200 ease-in-out'>
              <button
              title='Schedule'
              onClick={() =>{
                const element = document.getElementById('schedule')
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              >
                Schedule
              </button>
            </li>
            <li className='hover:scale-105 transition-all duration-200 ease-in-out'>
              <button
              title='Schedule'
              onClick={() =>{
                const element = document.getElementById('location')
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              >
                Location
              </button>
            </li>
            <li className='hover:scale-105 transition-all duration-200 ease-in-out'>
              <button
              title='Contact'
              onClick={() =>{
                const element = document.getElementById('contact')
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              >
                Contact
              </button>
            </li>
        </menu>
    </div>
  )
}
