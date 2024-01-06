"use client"
import { useState, useEffect } from "react";

import Link from "next/link";
import { useScrollEffectClient } from "@/utils/scrollUtils";

export default function NavBar() {
 /*  const [navbarVisible, setNavbarVisible] = useState(true); */

  const navbarVisible = useScrollEffectClient();

  /* const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  return (
    <div className="hidden sm:flex ">
      
      <div
        className={`flex  flex-wrap justify-around fixed top-0 left-0 w-full transition-all duration-300   text-2xl  ${
          navbarVisible ? "opacity-90" : "opacity-0"
        }   `}
      >
        <div className="flex p-2">
          <img className="w-40 rounded-full" src="images/logo-pizza.png" alt="logo-pizza" />
        </div>
        <div className="flex justify-around content-center h-10 w-full">
          <Link href="/" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif  text-zinc-50 cursor-pointer "> Home
          
          </Link>
          <Link href="/Pizzeria" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">Pizzeria
          
          </Link>
          <Link href="/Ristorante"  className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer "> Ristorante
            
          </Link>
          <Link href="" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">Bar
          
          </Link>
          <Link href="" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">Prenotaciones
         
          </Link>
        </div>
      </div>
    </div>
  );
}
