'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

const navItems = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "About",
    href: "/about"
  },
  {
    text: "Community",
    href: "/community"
  },
  {
    text: "Programs",
    href: "/events"
  },
  {
    text: "Coaching",
    href: "/coaching"
  }
]

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    console.log(scrollPosition);
    setScrollPosition(scrollPosition);
  };
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarClosing, setSidebarClosing] = useState(false);

  const handleSidebarTrigger = () => {
    if(showSidebar) {
      setSidebarClosing(true)
      setTimeout(() => {
        setShowSidebar(false);
        setSidebarClosing(false);
      }, 200);
    } else {
      setShowSidebar(true);
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrollPosition > 0 ? "bg-white text-themeGreen" : "bg-themeGreen text-white";

  return (
    <>
      <nav className={`${navClass} w-full flex justify-between h-16 sticky top-0 z-20`}>
          <div className="flex">

            <button onClick={handleSidebarTrigger} className={'md:hidden justify-self-start text-2xl p-4'}>☰</button>
            <Link href='/'>
              {
                scrollPosition > 0 ?
                <Image src={logoLight} className='h-full w-auto' alt="DPS Logo"/>
                :
                <Image src={logo} className='h-full w-auto' alt="DPS Logo"/>
              }
            </Link>

          </div>
        <div className='md:flex items-center justify-center w-full hidden'>
          {navItems.map((item, index) =>
              <Link               key={index}
                className={`px-4 py-2 mx-1 relative after:transition after:absolute after:w-full after:right-1/2
                          after:translate-x-[0%] after:hover:h-[2px] after:top-[100%] after:left-0 after:hover:bg-white
                          ${pathname === item.href && 'after:h-[2px] after:bg-white'}`}
                href={item.href}>
                  {item.text}
    
                </Link>

          )}
        </div>
          {/*Social MEdia?*/}
      </nav>
      {
          showSidebar &&
          <div  onClick={handleSidebarTrigger} className={'z-50'}>
            <div className={`fixed top-0 w-screen h-screen ${sidebarClosing ? 'bg-transparent' : 'bg-[rgba(0,0,0,.7)]'} z-30`}>
              <div className={`h-full w-52 top-0 shadow-2xl left-0 bg-themeGreen text-white text-2xl transition-all duration-500 ${showSidebar ? 'animate-[fromLeft_500ms]' : ''} ${sidebarClosing ? 'left-[-300px]' : ''} fixed z-30`}>
                <div className="h-16 flex">
                  <button onClick={handleSidebarTrigger} className={'md:hidden justify-self-start text-2xl p-4'}>☰</button>
                  <div>DHS</div>
                </div>
                {
                  navItems.map(link =>
                    <div key={link.text} className={'my-4 py-2 px-4'}>
                      <Link
                        className={`relative after:transition after:absolute after:w-full after:right-1/2
                          after:translate-x-[0%] after:hover:h-[2px] after:top-[100%] after:left-0 after:hover:bg-white
                          ${pathname === link.href && 'after:h-[2px] after:bg-white'}`}
                            href={link.href}
                      >
                        {link.text}
                      </Link>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        }
      </>
  )
}

export default Nav;