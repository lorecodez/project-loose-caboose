import React from 'react'
import Boxes from '@/public/boxes.jpg'
import Image from 'next/image'

export default function About() {
  return (
    <section id={'about'} className='px-6 py-3 w-full flex gap-20'>
      
      <picture className='w-1/3'>
        <Image
        title='Loose Caboose Napa Hobby Store Products'
        alt='toys, model trains, model cars, model, planes, model boats'
        src={Boxes}
        height={600}
        width={600}
        className='border-4 border-yellow-300 h-full rounded-2xl'
        />
      </picture>
      <artical className='text-2xl w-2/3'>
        <h4 className='font-bold text-8xl my-5 text-amber-950'>About</h4>
        <div className='flex flex-col gap-2 leading-relaxed'>
          <p>
            The Loose Caboose was begun by Ray Dahlgren in 1995, according to manager Ballard, because he
            couldn’t find the large outdoor model trains that he liked.
          </p>

          <p>
            Besides offering the largest selection of model trains and accessories in the Napa and Solano counties of California– 
            The Loose Caboose is a full service hobby shop. 
            Besides trains, trains, and more trains– The Loose Caboose stocks plastic model kits to build cars, boats, and airplanes; 
            rockets and rocketry supplies; Warhammer; slot cars; R/C planes and helicopters; 
            paint, glue, balsa wood and all other supplies for building.
            We Carry It All!
          </p>
        </div>
      </artical>
    </section>
  )
}
