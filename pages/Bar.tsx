import '@/style/globals.css'
import NavBar from '@/components/NavBar'
import Link from "next/link"

export default function bar () {

    return (
        <div>
            <div>
                <NavBar/>
                <img src="images/cocktailbar.jpg" alt="pizza" />
                 {/* <Link href="/">
                 Home
                 </Link> */}
            </div>
            <h1>bienvenidos a la seccion de bar</h1>
        </div>
    )
}