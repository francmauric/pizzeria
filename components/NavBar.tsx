"use client";
import { useState, useEffect } from "react";

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
    <div className="">
      
      <div
        className={`flex flex-wrap justify-around fixed top-0 left-0 w-full transition-all duration-300 bg-gray-600  text-2xl  ${
          navbarVisible ? "opacity-90" : "opacity-0"
        }   `}
      >
        <div className="flex w-28 p-2">
          <img className="w-20 rounded-full" src="images/logo-pizza.png" alt="logo-pizza" />
        </div>
        <div className="flex justify-center content-center h-10 w-full">
          <a href="" className="flex text-3xl mx-3 font-semibold font-sans hover:font-serif  text-red-500 cursor-pointer ">
            Home
          </a>
          <a href="" className="flex text-3xl mx-3 font-semibold font-sans hover:font-serif text-red-500 cursor-pointer ">
            Ristorante
          </a>
          <a href="" className="flex text-3xl mx-3 font-semibold font-sans hover:font-serif text-red-500 cursor-pointer ">
            Bar
          </a>
          <a href="" className="flex text-3xl mx-3 font-semibold font-sans hover:font-serif text-red-500 cursor-pointer ">
            Pizzeria
          </a>
          <a href="" className="flex text-3xl mx-3 font-semibold font-sans hover:font-serif text-red-500 cursor-pointer ">
            Prenotaciones
          </a>
        </div>
      </div>
    </div>
  );
}
