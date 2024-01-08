import Link from "next/link"

export default function pizzeria () {

    return(
        <div>
            <div>
                 <Link href="/">
                 Home
                 </Link>
            </div>
            <h1 className="text-red-600">Bienvenido a la seccion pizzeria</h1>
        </div>
    )
}