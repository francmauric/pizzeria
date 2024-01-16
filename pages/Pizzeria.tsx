import '@/style/globals.css'
import Link from "next/link"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import NavBarMobile from '@/components/NavBarMobile'

export default function pizzeria () {

    return(
        <div>
            <div className='flex flex-col relative'>
                <div className="flex  relative z-20 ">
                    <NavBar />
                    <NavBarMobile />
                
                </div>
                <div className="flex object-contain relative overflow-hidden">
                    <img className="w-full relative z-10 absolute inset-0 object-cover" src="images/pizzaheader.jpeg" alt="tavolo" />
                </div>
            </div>
            <main className='bg-gray-500 w-full flex-row'>
               <div className='flex flex-col items-center'> 
                <h1 className='text-center w-60 text-white'>Menu</h1>
                <div className=' w-full ml-8 bg-gray-200 p-4 rounded-lg'>
                  <div className='w-2/4'>  
                   <h2 className='text-xl font-bold mb-4'>tipos de pizza</h2>
                   <ul className='list-disc pl-4'>
                        <li>4 Stagioni</li>
                            <p>Pomodoro, mozzarella, 1/4 prosciutto cotto, 1/4 funghi champignon trifolati, 1/4 carciofi trifolati, 1/4 olive nere</p>
                        <li>Diavola</li>
                            <p>Pomodoro, Mozzarella, Spianata piccante</p>
                        <li>4 Formaggi</li>  
                            <p>Pomodoro, Mozzarella, Edamer, Gorgonzola, Grana grattugiato</p> 
                        <li>Affumicata</li>
                            <p>Pomodoro, Mozzarella, Speck, Scamorza affumicata</p>  
                        <li>Alessandria</li> 
                            <p>Pomodoro, Mozzarella, Salsiccia, Funghi porcini, Brie</p>  
                        <li>Amalfi</li>
                            <p>Mozzarella di Bufala, Acciughe, Olive nere, Pomodorini, Basilico</p>
                        <li>Americana</li>
                            <p>Pomodoro, Mozzarella, Wurstel, Patate al forno*</p>
                        <li>Bufala</li>
                            <p>Pomodoro, Mozzarella di bufala, basilico</p>
                        <li>Caprese</li>
                            <p>Pomodorini, Bufala, Origano</p>
                        <li>Capricciosa</li>
                            <p>Pomodoro, Mozzarella, Prosciutto cotto , Funghi champignon trifolati, Carciofi trifolati</p>
                        <li>Carciofina</li>
                            <p>Pomodoro, Mozzarella, Carciofi trifolati</p>
                        <li>Fattoria</li>
                            <p>Pomodoro, Mozzarella, Pancetta, Uovo</p>
                        <li>Funghi</li>
                            <p>Pomodoro, Mozzarella, Funghi champignon trifolati</p>
                        <li>Margherita</li>
                            <p>Pomodoro, Mozzarella</p>
                        <li>Napoli</li>
                            <p>Pomodoro, Mozzarella, Acciughe</p>
                   </ul>
                  </div>  
                </div>
              </div> 
            </main>
            <h1 className="text-red-600">Bienvenido a la seccion pizzeria</h1>
            <Footer/>
        </div>
    )
}