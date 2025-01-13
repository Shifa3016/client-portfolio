import React from 'react'
import Heading from '../components/Heading'

const page = () => {
  return (
    <div>
      <img className='w-[100vw]' src="contact.png" alt="no image" />
      <div className='mx-8 mt-4'>
        <Heading title = "Dr Mohammad Aftab Alam Ansari"/>
      </div>
      <div className='mx-[65px] mr-[100px]'>
        <div className='flex gap-2 text-lg my-2'>
          <img src="icons/location.svg" alt="" />
          <div>Baghmali, Hajipur, Bihar </div>
        </div>
        <div className='flex gap-1 text-lg my-2'>
          <img src="icons/phone.svg" alt="" />
          <div>+91-98236560580 | +91-8789640641 </div>
        </div>
        <div className='flex gap-2 text-lg my-2'>
          <img src="icons/gmail.svg" alt="" />
          <a href="mailto:ansari.aftab.in@gmail.com">ansari.aftab.in@gmail.com</a>
        </div>
        <div className='flex gap-2 text-lg my-2'>
          <img className='h-6' src="icons/linkedin.svg" alt="" />
          <a href="https://www.linkedin.com/in/aftab-alam-b5815a121/">LinkedIn</a>
        </div>
        <div className='flex gap-2 text-lg my-2'>
          <img className='h-6' src="icons/orcid.svg" alt="" />
          <a href="https://orcid.org/0000-0001-5559-4721">ORCID</a>
        </div>
      </div>
    </div>
  )
}

export default page
