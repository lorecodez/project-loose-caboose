'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/loose-caboose-logo-no-bg.png';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Head() {

  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {

    const prev = scrollY.getPrevious();

    

    if ( latest > prev! && latest > 150){
      setHidden(true);
    } else {
      setHidden(false);
    };

  });

  return (
    <motion.div
    variants={{
      visibile: { y: 0},
      hidden: { y: "-130%"},
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{ duration: 0.35, ease: "easeInOut"}}
    className='flex justify-start items-center w-full bg-stone-50'
    >
        <picture>
          <Image
          src={Logo}
          title='Loose Caboose Hobby Store Logo'
          alt='Loose Caboose Hobby Store Logo'
          width={100}
          height={100}
          />
        </picture>
        <menu className='flex items-center gap-5 py-3 px-6 font-bold text-2xl'>
            <li className='hover:scale-105 transition-all duration-200 ease-in-out'>
              <button
              onClick={() =>{
                const element = document.getElementById('home')
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
    </motion.div>
  )
}
