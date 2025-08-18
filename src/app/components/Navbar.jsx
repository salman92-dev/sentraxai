'use  client';
import Link from 'next/link';
import Image from 'next/image';
import { FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { useState,useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PrimaryButton from './Button';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState('');

const path = usePathname();

 useEffect(() =>{
   const handlIndex = () => {
    if (path === '/') {
      setIndex('home');
    }
    else if (path === '/explore'){
      setIndex('explore');
    }
    else if (path === '/submit') {
      setIndex('submit');
    }
    else {
      setIndex('home')
    }
  };
  handlIndex();

 },[path])



  return (
    <nav className="xl:container mx-auto max-md:fixed relative z-1000 w-full text-white px-4 py-4 flex items-center justify-between max-sm:bg-[#121417]">
      <div className="relative flex items-center justify-between space-x-4">
        <div className="text-xl md:text-3xl font-bold flex items-center sulphur-bold relative z-100">
            <Image className='w-40' src="/logo.png" width={338} height={68} alt='logo' priority />
        </div>
      </div>
      <div className="hidden md:flex gap-12 ml-12 prompt-medium text-base text-white/63">
          <Link href="#stats">About Us</Link>
          <Link href="#why-choose">Why Choose Us?</Link>
          <Link href="#why-choose">Our Services</Link>
          <Link href="#reviews">Tokenomics</Link>
          <Link href="#faq">Roadmap</Link> 
        </div>

      <div className="flex items-center space-x-4">
        <PrimaryButton text="Join Community" url="#" className='max-md:hidden' />
        <button
          className="md:hidden bg-[#FFFFFF1A] rounded-[8px] cursor-pointer relative z-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
       <div className={`${menuOpen ? 'block blurred' : 'hidden'} sm:hidden absolute w-full`}></div>
        <div className={`md:hidden absolute top-[5.2rem] left-0 right-0 prompt-medium bg-[#000] flex flex-col  px-6 gap-14 py-12 h-[100vh] w-[100%] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Link 
          href="#stats" 
          className="hover:scale(1.1) text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            About Us 
            </Link>

          <Link 
          href="#howitworks" 
          className="text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            Why Choose us
            </Link>
          <Link 
          href="#why-choose" 
          className="text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            Our Services
            </Link>
          <Link href="#reviews" 
          className="text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            Tokenomics
            </Link>
          <Link 
          href="#faq" 
          className="text-2xl flex items-center justify-between" 
          onClick={()=> setMenuOpen(false)}
          >
            Roadmap
            </Link>
          <div>
          </div>
        </div>
    </nav>
  );
}
