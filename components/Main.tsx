import About from "./About"
import Footer from "./Footer"

export default function Main () {

    return(
        <div>
            
            {/* <h1>main cuerpo etx</h1>
            <div className="h-80 bg-yellow-900">
                text
            </div>
            <div className="bg-gray-800 flex justify-around" >
        <div className="flex w-28 p-2">
          <img className="w-20 rounded-full" src="images/logo-pizza.png" alt="logo-pizza" />
        </div>
        <div className="flex justify-around content-center w-full">
          <a href="" className="flex text-2xl h-10 text-red-500 cursor-pointer ">
            Home
          </a>
          <a href="" className="flex text-2xl h-10 text-red-500 cursor-pointer ">
            Ristorante
          </a>
          <a href="" className="flex text-2xl h-10 text-red-500 cursor-pointer ">
            Bar
          </a>
          <a href="" className="flex text-2xl h-10 text-red-500 cursor-pointer ">
            Pizzeria
          </a>
          <a href="" className="flex text-2xl h-10 text-red-500 cursor-pointer ">
            Prenotaciones
          </a>
        </div>
      </div> */}
        <div className="bg-orange-800 flex flex-col ">
          <h1 className="flex justify-center text-5xl pt-20 text-zinc-50">The Tower </h1>
          <div className="flex w-full">
           <p className="flex justify-center text-center text-2xl m-28 text-white">Da sempre noi di The Tower diamo il nostro contributo a sostegno dell’ambiente, 
            privilegiando prodotti biologici e a KM0, stando attenti alla provenienza e al
             confezionamento dei prodotti evitando il packaging in plastica e tutto quello 
             che è preconfezionato, scegliendo cibi freschi e di stagione.</p>
             <img className="w-5/12 rounded-lg m-5" src="images/pizzeria-main.jpg" alt="" />
          </div>  
             <div className="flex flex-wrap justify-around w-80% pb-20 ">
                <div className="m-5 ">
                  <img className="w-20 m-5 rounded-full bg-white" src="images/cocina.png" alt="" />
                  <h3 className=" text-center text-white">excelente servicio</h3>
                </div>
                <div className="m-5">
                  <img className="w-20 m-5 rounded-full bg-white " src="images/telefono-inteligente.png" alt="" />
                  <h3 className="text-center text-white">atencion a domicilio</h3>
                </div>
                <div className="m-5">
                  <img className="w-20 m-5 rounded-full bg-white" src="images/restaurante.png" alt="" />
                  <h3 className="text-center text-white">inclusivita</h3>
                </div>
                <div className="m-5">
                  <img className="w-20 m-5 rounded-full bg-white" src="images/salud.png" alt="" />
                  <h3 className="text-center text-white">cocktails</h3>
                </div>
             </div>
             <div>
              <About />
             </div>
             <div>
              <Footer/>
             </div>
        </div>
        </div>
    )
}