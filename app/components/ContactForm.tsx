import React from 'react'

export default function ContactForm() {
  return (
    <form className='flex flex-col w-1/2 text-2xl gap-4'>
        <div className='flex flex-col'>
          <label htmlFor="name">Name</label>
          <input
          id='name'
          title='Name'
          name='name'
          type="text"
          placeholder='Please enter a name'
          className='p-2 rounded-2xl'
          required
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <input
          id='email'
          title='Email'
          name='email'
          type='text'
          placeholder='Please enter your email'
          className='p-2 rounded-2xl'
          required
          />
        </div>
        
        <div className='flex flex-col'>
          <label htmlFor="number">Phone Number</label>
          <input
          id='number'
          title='Phone Number'
          name='phone'
          type='number'
          placeholder='Please enter your phone number'
          className='p-2 rounded-2xl'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="message">Your Message</label>
          <textarea 
          name="message" 
          id="message"
          title='Your Message'
          placeholder='What can we help you with?'
          className='p-2 rounded-2xl'
          />
        </div>

        <button 
        className='px-6 py-3 my-10 rounded-full bg-red-600 text-stone-50 text-5xl shadow-xl font-bold hover:bg-orange-500 duration-200 transition-all ease-linear'
        >
          Send Message
        </button>
    </form>
  )
}
