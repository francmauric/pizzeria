export default function NavBar () {

    return(
        <div>
            <div>
                <h1 className="">Pizzeria </h1>
            </div>
            <div className="flex flex-wrap text-white text-2xl justify-around w-full h-20 bg-white">
                <a href="" className="flex p-3 text-red-500 cursor-pointer h-14">Home</a>
                <a href="" className="flex p-3 text-red-500 cursor-pointer ">Ristorante</a>
                <a href="" className="flex p-3 text-red-500 cursor-pointer ">Bar</a>
                <a href="" className="p-3 text-red-500 cursor-pointer h-14">Pizzeria</a>
                <a href="" className="p-3 text-red-500 cursor-pointer h-14">prenotaciones</a>
            </div>
        </div>
    )
}