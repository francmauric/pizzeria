import '@/style/globals.css'


import Link from "next/link"
import Main from '@/components/Main'

import Header from '@/components/Header'


export default function prenotaciones () {

    return (
        <div>
            
            <Header />
            <h1 className='text-black  md:text-8xl'>PRENOTACIONES</h1>
            <Main />
            
            {/* <Link href="/">Home</Link>
            <h1>bienvenido a PRENOTACIONES</h1> */}
        </div>
    )
}