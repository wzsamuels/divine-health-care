import Image from 'next/image'
// Icon imports
import toothIcon from '../../public/icons/tooth.svg'
import nutritionalIcon from '../../public/icons/nutrition.svg'
import vitalsIcon from '../../public/icons/vitals.svg'
import medicineIcon from '../../public/icons/medicine.svg'
import homeIcon from '../../public/icons/home.svg'
import hospitalIcon from '../../public/icons/hospital.svg'
import colonIcon from '../../public/icons/gastroenterology.svg'
import oxygenIcon from '../../public/icons/oxygen.svg'
import urologyIcon from '../../public/icons/urology.svg'
import toiletIcon from '../../public/icons/letrina_alt.svg'
import wheelchairIcon from '../../public/icons/wheelchair.svg'
import bladderIcon from '../../public/icons/bladder.svg'
import cleaningIcon from '../../public/icons/cleaning.svg'

import img1 from "../../public/img1.jpg"
import { ReactNode } from 'react'

const services = [
  {
    text: "Oral Hygiene",
    icon: toothIcon
  },
  {
    text: "Meal Planning & Prep",
    icon: nutritionalIcon
  },
  {
    text: "Medication Reminders",
    icon: medicineIcon
  },
  {
    text: "Home Safety Supervision",
    icon: homeIcon
  },
  {
    text: "Measuring Vitals",
    icon: vitalsIcon
  },
  {
    text: "Hospital Discharge Assistance",
    icon: hospitalIcon
  },
  {
    text: "Monitor Oxygen Use",
    icon: oxygenIcon
  },
  {
    text: "Colostomy Care",
    icon: colonIcon
  },
  {
    text: "Foley Catheter & Perineal",
    icon: urologyIcon
  },
  {
    text: "Toileting & Incontinence",
    icon: toiletIcon
  },
  {
    text: "Transfers & Mobility",
    icon: wheelchairIcon
  }, 
  {
    text: "Bowel & Bladder Problems",
    icon: bladderIcon
  },
  {
    text: "Housekeeping & Laundry",
    icon: cleaningIcon
  }
]
import {Montserrat, Inconsolata, Cabin } from 'next/font/google'
const monst = Montserrat({ subsets:  ['latin']})
const incon = Cabin({ subsets:  ['latin']})
const H1 = ({children, className} : {children: ReactNode, className: string}) => {
  return (
    <h1 className={`${incon.className} ${className}`}>{children}</h1>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='flex flex-col lg:flex-row h-full justify-center items-center'>        
        <Image className='h-full w-full lg:max-w-[50%]'  src={img1} alt="image 1"/>
        <div className='px-4 flex flex-col items-center justify-center gap-4'>
          <H1 className='text-center text-2xl md:text-3xl my-4'>Divine Healthcare is dedicated to providing you and your family peace of mind.</H1>
          <p>DHS has full-time professional staff to care for the needs of every client with special attention to every detail. DHS provides a 24-hour Care-Line with trained professionals ready to help day or night for our sick, elderly, and disabled clients.
            We have trained nurse's assistants for Private Duty cases or Live-in services.</p>
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
            <div key={service.text} className='flex flex-col justify-center place-items-center text-center w-full max-w-[150px]'>
              <Image src={service.icon} alt={service.text} className='h-16 w-16'/>
              <div>{service.text}</div>
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
