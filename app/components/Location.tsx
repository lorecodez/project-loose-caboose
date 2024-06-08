import Link from 'next/link'
import React, { lazy, Suspense } from 'react'

const GoogleMap = lazy(() => import('@/app/components/GoogleMap').then( module => {
  return {default: module.default}
}))


export default function Location() {
  return (
    <section id='location' className='h-full w-full px-6 py-3'>
      <h3 className='font-bold text-8xl my-5 text-amber-950'>Location</h3>
      
      <Suspense>
        <GoogleMap/>
      </Suspense>
      <Link
      title='Loose Caboose Napa Hobby Store Location'
      href='https://www.google.com/maps/place/Loose+Caboose+Hobbies/@38.298875,-122.2821,15z/data=!4m14!1m7!3m6!1s0x8085066f560ca2ef:0x2070cb1a4edd5a1e!2sLoose+Caboose+Hobbies!8m2!3d38.298875!4d-122.2821!16s%2Fg%2F1v_vt3rb!3m5!1s0x8085066f560ca2ef:0x2070cb1a4edd5a1e!8m2!3d38.298875!4d-122.2821!16s%2Fg%2F1v_vt3rb?entry=ttu'
      className='hover:underline hover:text-blue-500 text-2xl py-3'
      >
        820-A Third Street (facing Soscol), Napa, CA 94559
      </Link>
    </section>
  )
}
