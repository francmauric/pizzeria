export default function NavBar () {

    return(
        <div>
            <div>
                <h1 className="">Pizzeria </h1>
            </div>
            <div className="flex flex-wrap bg-gray-300 z-10 text-2xl justify-around w-full h-20 ">
                <a href="" className="p-3 text-red-500 cursor-pointer ">Home</a>
                <a href="" className="p-3 text-red-500 cursor-pointer ">Ristorante</a>
                <a href="" className="p-3 text-red-500 cursor-pointer ">Bar</a>
                <a href="" className="p-3 text-red-500 cursor-pointer ">Pizzeria</a>
                <a href="" className="p-3 text-red-500 cursor-pointer ">prenotaciones</a>
            </div>
        </div>
    )
}