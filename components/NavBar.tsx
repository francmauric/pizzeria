"use client";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function NavBar() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleScroll = () => {
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
  }, []);

  return (
    <div className="hidden sm:flex ">
      
      <div
        className={`flex  flex-wrap justify-around fixed top-0 left-0 w-full transition-all duration-300   text-2xl  ${
          navbarVisible ? "opacity-90" : "opacity-0"
        }   `}
      >
        <div className="flex w-28 p-2">
          <img className="w-20 rounded-full" src="images/logo-pizza.png" alt="logo-pizza" />
        </div>
        <div className="flex justify-around content-center h-10 w-full">
          <a href="" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif  text-zinc-50 cursor-pointer ">
            Home
          </a>
          <a  className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">
            Ristorante
          </a>
          
          <Link href="/Ristorante" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">
            Pizzeria
          </Link>
          <a href="" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">
            Bar
          </a>
          <a href="" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">
            Prenotaciones
          </a>
        </div>
      </div>
    </div>
  );
}
