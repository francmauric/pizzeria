
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
}