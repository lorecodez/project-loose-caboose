'use client'
import React from 'react'
import Image from 'next/image'
import Owner from '@/public/owner.jpg'

export default function Schedule() {
  return (
    <section className='flex flex-col items-center w-full h-full '>
        
        <div className='px-6 py-3 flex items-center w-full h-full'>
            <picture className='w-1/2 relative flex items-center justify-center border-4  rounded-full overflow-clip'>
                <Image
                src={Owner}
                alt='owner'
                height={500}
                width={500}
                className='w-full object-cover shadow-inner'
                />
            </picture>
            <aside className='w-1/2'>
                <h2 className='text-8xl font-bold self-start'>Schedule</h2>
                <table className='w-full text-left'>
                    <thead>
                        <tr>
                            <th className='w-20'>Mon</th>
                            <th className='w-20'>Tues</th>
                            <th className='w-20'>Weds</th>
                            <th className='w-20'>Thurs</th>
                            <th className='w-20'>Fri</th>
                            <th className='w-20'>Sat</th>
                            <th className='w-20'>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Closed</td>
                            <td>10am-6pm</td>
                            <td>10am-6pm</td>
                            <td>10am-6pm</td>
                            <td>10am-6pm</td>
                            <td>10am-6pm</td>
                            <td>12pm-5pm</td>
                        </tr>
                    </tbody>
                </table>
            </aside>
        </div>
    </section>
  )
}
