'use client'
import { useState, useEffect } from "react";

export default function NavBar () {
    const [navbarVisible, setNavbarVisible] = useState(true);

    const handleScroll = () => {
        if(window.scrollY > 100) {
            setNavbarVisible(false);
        } else {
            setNavbarVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return(
        <div>
            <div>
                <h1 className="">Pizzeria </h1>
            </div>
            <div className={`flex flex-wrap fixed top-0 left-0 w-full transition-all duration-300 bg-gray-600 opacity-900 text-2xl justify-around ${navbarVisible ? 'opacity-100' : 'opacity-0'}  h-20 `}>
                <a href="" className="p-3 text-red-500 cursor-pointer ">Home</a>
                <a href="" className="p-3 text-red-500 cursor-pointer ">Ristorante</a>
                <a href="" className="p-3 text-red-500 cursor-pointer ">Bar</a>
                <a href="" className="p-3 text-red-500 cursor-pointer ">Pizzeria</a>
                <a href="" className="p-3 text-red-500 cursor-pointer ">prenotaciones</a>
            </div>
        </div>
    )
}