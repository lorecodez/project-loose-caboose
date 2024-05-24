'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Head() {
  return (
    <div className='flex justify-center items-center'>
        <picture>

        </picture>
        <menu className='flex items-center gap-5 py-3 px-6'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </menu>
    </div>
  )
}
