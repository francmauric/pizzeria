/* import '@/style/globals.css'


import Link from "next/link"
import Main from '@/components/Main'

import Header from '@/components/Header'


export default function prenotaciones () {

    return (
        <div>
            
            <Header />
            <h1 className='text-black  md:text-8xl'>PRENOTACIONES</h1>
            <Main />
            
           
        </div>
    )
} */
'use client'
import styles from './ristorante.module.scss'
import "@/style/ristorante.css"
import "@/style/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NavBarMobile from "@/components/NavBarMobile";
import Banner from "@/components/Banner";
import IndexParallax from "@/components/ZoomParallax/indexParallax"
import { useEffect  } from 'react';
import Lenis from '@studio-freight/lenis';
import IndexParallax2 from '@/components/ZoomParallax/indexParallax2';
import IndexParallax3 from '@/components/ZoomParallax/indexParallax3'

export default function ristorante() {
  
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
  },[])
  
  return (
    <div>
      <div className="w-full ">
        <div className="flex flex-col relative">
          <div className="flex  relative z-20 ">
            <NavBar />
            <NavBarMobile />
          </div>
          <div className="flex object-contain relative overflow-hidden">
            <img
              className="w-full relative z-10 absolute inset-0 object-cover"
              src="images/tavolo.jpeg"
              alt="tavolo"
            />
          </div>
        </div>
      </div>
     
      <Banner />
     
      <main className=' bg-gray-400'>
        {/* vista escritorio */}
        <h1 className='text-4xl text-center'>Menu</h1>
        
      <div className={styles.main}>
        <IndexParallax />
        <IndexParallax2 />
        <IndexParallax3 />
      </div>
        {/* vista responsive */}
        <div></div>
      </main>
      <Footer />
    </div>
  );
}



