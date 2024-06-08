import Link from 'next/link';
import React from 'react'
import { TbPhone, TbMail, TbBrandInstagram, TbBrandFacebook  } from "react-icons/tb";

export default function ContactInfo() {
  return (
    <div className='flex flex-col items-center justify-center text-4xl font-bold w-1/2 h-full gap-4'>
      <div className='flex items-center hover:underline'>
        <TbPhone className='mx-2'/>
        <Link
        title='Loose Caboose Napa Hobby Number'
        href='tel:+17072581222'
        >
          +1(707) 258-1222
        </Link>
      </div>
      <div className='flex items-center hover:underline'>
        <TbMail className='mx-2'/>
        <Link
        title='Loose Caboose Napa Hobby Shop Email'
        href='mailto:contact@lorenzowashington.com'
        >
          Example@email.com
        </Link>
      </div>
      <div className='flex items-center hover:underline'>
        <TbBrandInstagram className='mx-2'/>
        <Link
        title='Loose Caboose Napa Hobby Store Instagram'
        href={'https://www.instagram.com/loosecaboosehobbies707/'}
        >
          @loosecaboosehobbies707
        </Link>
      </div>
      <div className='flex items-center hover:underline'>
        <TbBrandFacebook className='mx-2'/>
        <Link
        title='Loose Caboose Napa Hobby Store Facebook'
        href={'https://www.facebook.com/p/Loose-Caboose-Hobbies-100069732836193/'}
        >
          @Loose Caboose Hobbies
        </Link>
      </div>
    </div>
  )
}
