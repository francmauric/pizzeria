import About from "./About"
import Footer from "./Footer"
import Image from "next/image";

export default function Main () {

    return(
        <div className="overflow-hidden">
            
            
        <div className="bg-orange-800 flex flex-col ">
          <h1 className="text-center text-5xl pt-10 text-zinc-50">The Tower </h1>
          <div className="flex flex-col-reverse md:flex-row w-full md:items-center ">
           <p className=" text-center text-xl md:text-2xl m-5 text-white">Da sempre noi di The Tower diamo il nostro contributo a sostegno dell’ambiente, 
            privilegiando prodotti biologici e a KM0, stando attenti alla provenienza e al
             confezionamento dei prodotti evitando il packaging in plastica e tutto quello 
             che è preconfezionato, scegliendo cibi freschi e di stagione.</p>
             <Image className=" md:w-5/12 rounded-lg m-5" src="/images/pizzeria-main.jpg" alt="pizzeriaMain" width={1920} height={1080} />
          </div>  
             <div className="flex flex-wrap justify-around w-full md:w-80% pb-10 ">
                <div className="m-3 md:m-5 ">
                  <Image className="w-12 md:w-20 m-2 md:m-5 rounded-full bg-white" src="/images/cocina.png" alt="" width={1920} height={1080}/>
                  <h3 className=" text-center text-white">excelente servicio</h3>
                </div>
                <div className="m-3 md:m-5">
                  <Image className="w-12 md:w-20 m-2 md:m-5 rounded-full bg-white " src="/images/telefono-inteligente.png" alt="" width={1920} height={1080}/>
                  <h3 className="text-center text-white">atencion a domicilio</h3>
                </div>
                <div className="m-3 md:m-5">
                  <Image className="w-12 md:w-20 m-2 md:m-5 rounded-full bg-white" src="/images/restaurante.png" alt="" width={1920} height={1080}/>
                  <h3 className="text-center text-white">inclusivita</h3>
                </div>
                {/* <div className="m-3 md:m-5">
                  <Image className="w-12 md:w-20 m-2 md:m-5 rounded-full bg-white" src="/images/salud.png" alt="" width={1920} height={1080}/>
                  <h3 className="text-center text-white">cocktails</h3>
                </div> */}
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