import "@/style/globals.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Footer from "@/components/Footer";
import NavBarMobile from "@/components/NavBarMobile";
import Banner from "@/components/Banner";
import { useState } from "react";
import "@/style/bar.css"

type CocktailDescriptions = {
  Negroni: string;
  Margarita: string;
  "Pina colada": string;
  Mojito: string;
  "Negroni Sbagliato": string;
  "Sex on the beach": string;
  Daiquiri: string;
  Martini: string;
  "Long Island": string;
  "Bloody Mary": string;
  "Mai Tai": string;
  "Tom Collins": string;
  "Aperol Spritz": string;
  "Hugo Spritz": string;
  "Old Fashioned": string;
  "Expresso Martini": string;
  "Caipirinha": string;
};

export default function bar() {
 const [selectedCocktail, setSelectedCocktail] = useState<keyof CocktailDescriptions | null>(null);

const handleCocktailSelect = (cocktail: keyof CocktailDescriptions) => {
  setSelectedCocktail(cocktail);
}

const cocktailDescriptions: CocktailDescriptions = {
  Negroni: "gin, campari, vermuth",
  Margarita: "tequila,lime,triple sec",
  "Pina colada": "Run blanco, coconut cream, anana ",
  Mojito: "run blanco, lime, azucar, menta, soda",
  "Negroni Sbagliato": "campari, vermuth, proseco",
  "Sex on the beach": "vodka, jugo de naranja, licor de durazno, granadina",
  Daiquiri: "ron blanco, jugo de lima, azucar",
  Martini: "gin, dry vermuth martini",
  "Long Island": "vodka, tequila, ron blanco, gin, coca-cola, contreau, jugo de limon, syrup",
  "Bloody Mary": "vodka, jugo de tomate, jugo de limon, worcestershire sauce, tabasco, sal , pimienta",
  "Mai Tai": "rum blanco, rum oscuro, orange curacao, orgeat syrup, jugo de limon, syrup",
  "Tom Collins": "gin, jugo de limon, syrup, soda",
  "Aperol Spritz": "aperol, proseco, soda",
  "Hugo Spritz": "sirope de flores de sauco, proseco, menta, soda",
  "Old Fashioned": "whiskey rye o bourbon, azucar, angostura, agua",
  "Expresso Martini": "vodka, licor de cafe (kahlua), syrup, cafe",
  Caipirinha: "cachaha, jugo de limon, azucar",
};

const getImageFileName = (cocktail: string) => {
  
  return cocktail.toLowerCase().replace(/ /g,"-") + ".jpg";
}

  return (
    <div>
      <div className="flex flex-col relative">
        <div className="flex  relative z-20 ">
          <NavBar />
          <NavBarMobile />
        </div>
        <div className="flex object-contain relative overflow-hidden">
          <img
            className="w-full relative z-10 absolute inset-0 object-cover"
            src="images/cocktailbar.jpg"
            alt="tavolo"
          />
        </div>
      </div>
      <div>
        <Banner />
      </div> 
      <main className="w-full relative h-screen bg-cover bg-center" style={{backgroundImage:"url('images/fondo-madera.jpg')"}}>
        
        <div className="relative z-10">
          <div className="w-full  ">
            <h1 className="text-4xl text-white text-center p-5">Menu</h1>
          </div>
          <div className="w-full flex flex-row-reverse">
            <div className="w-2/4 flex-col justify-end bg-gray-600 mx-40 rounded-lg ">
              <div>
                <h2 className="text-center text-3xl text-white ">
                  Lista di cocktails
                </h2>
              </div>
              <div>
                <ul className="text-white pl-10 overflow-y-auto h-96">
                  {Object.keys(cocktailDescriptions).map((cocktail) => (
                    <li
                      key={cocktail}
                      className={`cursor-pointer p-2 m-2 rounded border border-gray-400 ${
                        selectedCocktail === cocktail
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 hover:bg-gray-400"
                      } transition-all duration-300`}
                      onClick={() => handleCocktailSelect(cocktail as keyof CocktailDescriptions)}
                    >
                      {cocktail}
                      <p className="text-sm text-gray-600">
                        {cocktailDescriptions[cocktail as keyof CocktailDescriptions]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-3/4 flex  flex-col">
              <h1 className="text-white text-center text-3xl">{selectedCocktail}</h1>
              <img
                className="px-2 rounded-full max-w-full max-h-96"
                src={`/images/cocktails/${getImageFileName(selectedCocktail || "")}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
      <div>

      <Footer/>
      </div>
    </div>
  );
}
