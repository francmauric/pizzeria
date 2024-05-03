import '@/style/globals.css'


import Link from "next/link"
import Main from '@/components/Main'

import Header from '@/components/Header'


export default function prenotaciones () {

    return (
        <div>
            
            <Header />
            <main className='bg-gray-400'>
                <h1>apuntamento</h1>

                <form action="" className='flex flex-wrap'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" className='bg-orange-400'/>
                    <input type="text" />

                </form>
            </main>
            <h1 className='text-black  md:text-8xl'>PRENOTACIONES</h1>
            <Main />
            
           
        </div>
    )
}


