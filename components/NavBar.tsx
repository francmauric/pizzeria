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
    <div>
      <div>
        <h1 className="">Pizzeria </h1>
      </div>
      <div
        className={`flex flex-wrap justify-around fixed top-0 left-0 w-full transition-all duration-300 bg-gray-600 opacity-200 text-2xl  ${
          navbarVisible ? "opacity-100" : "opacity-0"
        }   `}
      >
        <div className="flex w-10% p-2">
          <img className="w-20 rounded-full" src="images/logo-pizza.png" alt="logo-pizza" />
        </div>
        <div className="flex justify-around w-80%">
          <a href="" className="p-5 text-red-500 cursor-pointer ">
            Home
          </a>
          <a href="" className="p-5 text-red-500 cursor-pointer ">
            Ristorante
          </a>
          <a href="" className="p-5 text-red-500 cursor-pointer ">
            Bar
          </a>
          <a href="" className="p-5 text-red-500 cursor-pointer ">
            Pizzeria
          </a>
          <a href="" className="p-5 text-red-500 cursor-pointer ">
            prenotaciones
          </a>
        </div>
      </div>
    </div>
  );
}
