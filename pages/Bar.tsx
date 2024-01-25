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
            <main className="w-full ">
            <img className=" w-full h-52 bg-cover" src="images/fondo-madera.jpg" alt="madera" />
                <div>
                    <div>
                        <h1>menu</h1>
                    </div>
                    <div>
                        <h2>lista di cocktails</h2>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}