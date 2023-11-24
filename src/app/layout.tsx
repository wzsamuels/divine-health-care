import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import {Montserrat, Inconsolata, Cabin } from 'next/font/google'
import Nav from '../components/Nav'
 
const monst = Montserrat({ subsets:  ['latin']})
const incon = Cabin({ subsets:  ['latin']})

export const metadata: Metadata = {
  title: 'Divine Healthcare',
  description: 'Divine Healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${monst.className} min-h-screen relative bg-white text-black overflow-x-hidden`}>
        <Nav/>
        <main className="pt-4 pb-16 max-w-6xl min-h-screen mx-auto">
          {children}
        </main>
        <footer className='text-center absolute bottom-0 w-full text-[.9rem] md:text-base p-1 md:p-4 '>
          <hr className='w-full border-white py-2'/>
          Divine Healthcare Services <a className='underline' href="mailto:info@dpsoccer360.com">contanct@contact.com</a> | <a className='underline' href='tel:+13364177759'>(336) 417-7759</a> | Website by <a className='underline' href="https://twinsilverdesign.com" target="_blank" rel="noopener noreferrer">Twin Silver</a>
        </footer>
      </body>
    </html>
  )
}
