import '@/style/globals.css'
import NavBar from '@/components/NavBar'
import Link from "next/link"
import Footer from '@/components/Footer'

export default function bar () {

    return (
        <div>
            <div className='flex flex-col relative'>
                <div className="flex  relative z-20 ">
                    <NavBar />
                
                </div>
                <div className="flex object-contain relative overflow-hidden">
                    <img className="w-full relative z-10 absolute inset-0 object-cover" src="images/cocktailbar.jpg" alt="tavolo" />
                </div>
            </div>
            <h1>bienvenidos a la seccion de bar</h1>
            <Footer/>
        </div>
    )
}