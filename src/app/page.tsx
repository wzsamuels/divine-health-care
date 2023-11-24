import Image from 'next/image'
import img1 from "../../public/img1.jpg"
import { ReactNode } from 'react'

import {Montserrat, Inconsolata, Cabin } from 'next/font/google'
import { services } from './pageData'

const monst = Montserrat({ subsets:  ['latin']})
const incon = Cabin({ subsets:  ['latin']})

const H1 = ({children, className} : {children: ReactNode, className: string}) => {
  return (
    <h1 className={`${incon.className} ${className}`}>{children}</h1>
  )
}

export default function Home() {
  return (
    <main className="">
      <div className='flex flex-col lg:flex-row h-full justify-center items-center'>        
        <Image className='h-full w-full lg:max-w-[50%]'  src={img1} alt="image 1"/>
        <div className='px-4 flex flex-col items-center justify-center gap-4'>
          <H1 className='text-center text-2xl md:text-3xl my-4'>Divine Healthcare is dedicated to providing you and your family peace of mind.</H1>
          <p>DHS has full-time professional staff to care for the needs of every client with special attention to every detail. DHS provides a 24-hour Care-Line with trained professionals ready to help day or night for our sick, elderly, and disabled clients.
            We have trained nurse&apos;s assistants for Private Duty cases or Live-in services.</p>
        </div>
      </div>
      <section className='my-6 bg-blue-700 text-white p-4 text-center m-4 rounded-xl'>
        <h2 className='text-center text-xl md:text-2xl my-4'>We offer a special touch of compassion and love to every client and recognize each of our clients by name.</h2>
        <p>To us, you are not just a number. We treat all of our clients with dignity and respect.</p>
      </section>
      <section className='my-6'>
        <h2 className='text-center text-xl md:text-2xl my-4'>Professional Care Services</h2>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          { services.map(service =>
            <div key={service.text} className='my-6 flex flex-col justify-center place-items-center text-center w-full max-w-[150px]'>
              <div className="bg-white -my-10 z-20 border border-black rounded-xl">
                <Image src={service.icon} alt={service.text} className='h-16 w-16'/>
              </div>
              <div className=' bg-themeBlue p-4 rounded-xl text-white min-h-[8rem] flex justify-end items-end pb-6'>{service.text}</div>
            </div>
          )}
        </div>
      </section>
      <section>
        <h2 className='text-center text-xl md:text-2xl my-4'>Did you know?</h2>
        <ul>
          <li>70% of patients who receive in-home care recover more quickly.</li>
          <li>In-home care saves the average family up to 40% in hospital/rehabilitation center overnight stays.</li>
          <li>Divine Healthcare Services will design a Care Plan to specifically fit your loved ones needs.</li>
          <li>DHS has a 24-hour Care Line with experienced professionals on duty.</li>
          <li>DHS provides minor medical and non-medical services.</li>
          <li></li>
        </ul>
• 
• We accept adults & children
with disabilities.
• We accept Medicaid, private insurance,
and all major credit cards.
• We accept Cap/C, Cap/D, PCS,
and private pay.
      </section>
    </main>
  )
}
