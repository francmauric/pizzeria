/* 
import '@/style/globals.css'
import NavBar from "@/components/NavBar"
import Footer from '@/components/Footer'
import NavBarMobile from '@/components/NavBarMobile'

export default function ristorante() {

    return (
        <div>
            <div className="w-full ">
            <div className="flex flex-col relative">
                <div className="flex  relative z-20 ">
                <NavBar />
                <NavBarMobile />
                </div>
                <div className="flex object-contain relative overflow-hidden">
                    <img className="w-full relative z-10 absolute inset-0 object-cover" src="images/tavolo.jpeg" alt="tavolo" />
                </div>
            </div>
            </div>
            <Footer />
        </div>
        )
} */

import '@/style/globals.css'
import Link from "next/link"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import NavBarMobile from '@/components/NavBarMobile'
import { useState } from 'react';
import '@/style/pizzeria.css'
import Banner from '@/components/Banner'

export default function pizzeria () {
   const [selectedPizza, setSelectedPizza] = useState<string | null>(null);

   const handlePizzaSelect = (pizza: string) => {
      setSelectedPizza(pizza);
   };
   console.log(selectedPizza)

    return(
        <div>
            <div className='flex flex-col relative'>
                <div className="flex  relative z-20 ">
                    <NavBar />
                    <NavBarMobile />
                
                </div>
                <div className="flex object-contain relative overflow-hidden">
                    <img className="w-full relative z-10 absolute inset-0 object-cover" src="images/pizzaheader.jpeg" alt="tavolo" />
                </div>
            </div>
            <div className='w-full '>
               <Banner />
            </div>
            <main className={`bg-gray-500 w-full flex-row ${selectedPizza && `bg-cover bg-center`} ${selectedPizza && `bg-${selectedPizza}`}`}>
               <div className='flex flex-row flex-wrap'> 
                    <div className='flex w-full justify-center text-center'>
                        <h1 className='text-4xl font-bold py-4 text-center w-2/4 text-white'>Menu</h1>
                    </div>
                    <div className='flex w-full justify-end pr-4 pb-4'>
                      <div className='flex-col justify-end w-2/4 bg-gray-200 p-4 rounded-lg'>
                   
                        <h2 className='text-2xl font-bold mb-4 text-gray-800'>tipos de pizza</h2>
                        <ul className='list-disc pl-4'>
                {['4Stagione', 'diavola', '4formaggi', 'affumicata', 'alesandria', 'amalfi', 'americana', 'bufala1', 'caprese', 'capricciosa', 'carciofi', 'fattoria', 'funghi', 'margherita', 'napoli'].map((pizza) => (
                  <li
                    key={pizza}
                    className={`cursor-pointer p-2 m-2 rounded border border-gray-400 ${selectedPizza === pizza ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'} transition-all duration-300`}
                    onClick={() => handlePizzaSelect(pizza)}
                  >
                    {pizza}
                  </li>
                ))}
              </ul>
                   
                 </div>
               </div>
              </div> 
            </main>
            
            
            <Footer/>
        </div>
    )
}