import '@/style/globals.css'
import NavBar from '@/components/NavBar'
import Link from "next/link"
import Footer from '@/components/Footer'
import NavBarMobile from '@/components/NavBarMobile'
import Banner from '@/components/Banner'


export default function bar () {

    return (
        <div>
            <div className='flex flex-col relative'>
                <div className="flex  relative z-20 ">
                    <NavBar />
                    <NavBarMobile />
                
                </div>
                <div className="flex object-contain relative overflow-hidden">
                    <img className="w-full relative z-10 absolute inset-0 object-cover" src="images/cocktailbar.jpg" alt="tavolo" />
                </div>
            </div>
            <div>
                <Banner />
            </div>
            <main className="w-full relative ">
            <img className=" w-full object-cover absolute inset-0" src="images/fondo-madera.jpg" alt="madera" />
                <div className='relative z-10'>
                    <div className='w-full  '>
                        <h1 className='text-4xl text-white text-center p-5'>Menu</h1>
                    </div>
                    <div className='w-full flex flex-row-reverse'>
                        <div className='w-2/4'>
                            <div>
                                <h2 className='text-3xl text-white '>lista di cocktails</h2>
                            </div>
                            <div>
                                <ul className='text-white'>
                                    <li>Negroni</li>
                                    <li>Margarita</li>
                                    <li>Piña colada</li>
                                    <li>Mojito</li>
                                </ul>
                            </div>
                        </div> 
                        <div className='w-2/4 h-56'>
                            <h1 className='text-white'>aqui va la imagen</h1>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer/>
        </div>
    )
}