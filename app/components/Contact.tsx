'use client'
import React, { lazy, Suspense } from 'react'
// import ContactInfo from '@/app/components/ContactInfo';
// import ContactForm from '@/app/components/ContactInfo';

const ContactForm = lazy(() => import('@/app/components/ContactForm').then( module => {
  return {default: module.default}
}))

const ContactInfo = lazy(() => import('@/app/components/ContactInfo').then( module => {
  return {default: module.default}
}))

export default function Contact() {

  if(!ContactForm){
    return <p>error</p>
  }

  return (
    <section id='contact' className='w-full h-full'>
      <h5 className='font-bold text-8xl my-5 text-amber-950 text-left w-full'>Contact Us</h5>
      <div className='w-full h-full flex items-center'>
        <Suspense fallback={<p>Loading...</p>}>
          <ContactForm/>
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <ContactInfo/>
        </Suspense>
      </div>
    </section>
  )
}
