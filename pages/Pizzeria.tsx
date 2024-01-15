import '@/style/globals.css'
import Link from "next/link"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import NavBarMobile from '@/components/NavBarMobile'

export default function pizzeria () {

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
            <main className='bg-gray-500 w-full flex-row'>
               <div className='flex flex-col items-center'> 
                <h1 className='text-center w-60 text-white'>Menu</h1>
                <div className=' w-full ml-8 bg-gray-200 p-4 rounded-lg'>
                  <div className='w-2/4'>  
                   <h2 className='text-xl font-bold mb-4'>tipos de pizza</h2>
                   <ul className='list-disc pl-4'>
                        <li>margarita</li>
                            <p>queso,y salsa</p>
                        <li>diavola</li>
                   </ul>
                  </div>  
                </div>
              </div> 
            </main>
            <h1 className="text-red-600">Bienvenido a la seccion pizzeria</h1>
            <Footer/>
        </div>
    )
}