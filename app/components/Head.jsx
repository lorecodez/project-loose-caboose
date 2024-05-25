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
            <li>
              <Link
              href={'/'}
              title='Home'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
              href={'/about'}
              title='About'
              >
                About
              </Link>
            </li>
            <li>
              <Link
              href={'/contact'}
              title='Contact'
              >
                Contact
              </Link>
            </li>
        </menu>
    </div>
  )
}
