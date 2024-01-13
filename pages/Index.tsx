import '@/style/globals.css'


import Link from "next/link"
import Main from '@/components/Main'

import Header from '@/components/Header'


export default function Home () {
    

    return (
        <div>
            
            <Header />
            <Main />
            
            {/* <Link href="/">Home</Link>
            <h1>bienvenido a PRENOTACIONES</h1> */}
        </div>
    )
}