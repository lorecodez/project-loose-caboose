'use client'
import React from 'react'
import Image from 'next/image'
import Owner from '@/public/owner.jpg'

export default function Schedule() {
  return (
    <section className='flex flex-col items-center w-full h-full '>
        
        <div className='px-6 py-3 flex items-center w-full h-full gap-5'>
            <picture className=' relative flex items-center justify-center border-4  rounded-full overflow-clip'>
                <Image
                src={Owner}
                alt='owner'
                height={400}
                width={400}
                className='w-full object-cover shadow-inner'
                />
            </picture>
            <aside className='w-full flex flex-col items-center justify-center'>
                <h2 className='text-8xl font-bold self-start'>Schedule</h2>
                <table className='w-full text-left text-2xl'>
                    <thead className='w-full'>
                        <tr>
                            <th className='w-16 mr-1'>Mon</th>
                            <th className='w-20 mr-1'>Tues</th>
                            <th className='w-20 mr-1'>Weds</th>
                            <th className='w-20 mr-1'>Thurs</th>
                            <th className='w-20 mr-1'>Fri</th>
                            <th className='w-20 mr-1'>Sat</th>
                            <th className='w-20 mr-1'>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='w-20 mr-1'>Closed</td>
                            <td className='w-20 mr-1'>10am-6pm</td>
                            <td className='w-20 mr-1'>10am-6pm</td>
                            <td className='w-20 mr-1'>10am-6pm</td>
                            <td className='w-20 mr-1'>10am-6pm</td>
                            <td className='w-20 mr-1'>10am-6pm</td>
                            <td className='w-20 mr-1'>12pm-5pm</td>
                        </tr>
                    </tbody>
                </table>
            </aside>
        </div>
    </section>
  )
}
