/* import React from "react" */
import '@/style/globals.css'
import NavBar from "@/components/NavBar"

export default function ristorante() {

    return (
        <div>
            <div className="w-full ">
            <div className="flex flex-col relative">
                <div className="flex  relative z-20 ">
                <NavBar />
                
                </div>
                <div className="flex object-contain relative overflow-hidden">
                    <img className="w-full relative z-10 absolute inset-0 object-cover" src="images/tavolo.jpeg" alt="tavolo" />
                </div>
            </div>
            </div>
        {/* <div>ristorante</div>
        <div>hola esta pagina es ristorante</div> */}
        </div>
        )
}