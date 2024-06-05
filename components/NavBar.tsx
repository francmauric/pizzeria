

import React from "react";
import Image from "next/image"

import Link from "next/link";
import { useScrollEffect } from "@/utils/client/scrollUtils";
import { useScrollEffectServer  } from "@/utils/server/scrollUtilsServer";

export default function NavBar() {

  const navbarVisible = typeof window !== 'undefined' ? useScrollEffect() : useScrollEffectServer();
  
  return (
    <div className={`hidden sm:flex ${navbarVisible ? "opacity-90" : "opacity-0"}`}>
      
      <div
        className="flex flex-wrap justify-around fixed top-0 left-0 w-full transition-all duration-300 text-2xl">
          {navbarVisible && (
            <>
        <div className="flex p-2">
          <Image className="w-40 rounded-full" src="/images/logo-pizza.png" alt="logo-pizza" width={1920} height={1080} />
        </div>
        <div className="flex justify-around content-center h-10 w-full">
          <Link href="/" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif  text-zinc-50 cursor-pointer "> Home
          
          </Link>
          <Link href="/Pizzeria" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">Pizzeria
          
          </Link>
          <Link href="/Ristorante"  className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer "> Ristorante
            
          </Link>
          <Link href="/Bar" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">Bar
          
          </Link>
         {/*  <Link href="/Prenotaciones" className="flex text-3xl mx-3 hover:p-4 font-semibold font-sans hover:text-4xl hover:font-serif text-zinc-50 cursor-pointer ">Prenotaciones
         
          </Link> */}
        </div>
        </>
        )}
      </div>
    </div>
  );
}
