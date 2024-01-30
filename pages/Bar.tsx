import "@/style/globals.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Footer from "@/components/Footer";
import NavBarMobile from "@/components/NavBarMobile";
import Banner from "@/components/Banner";
import { useState } from "react";

type CocktailDescriptions = {
  Negroni: string;
  Margarita: string;
  "Piña colada": string;
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
  "Caipiriña": string;
};

export default function bar() {
 const {selectedCocktail, setSelectedCocktail} = useState<keyof CocktailDescriptions | null>(null);

const handleCocktailSelect = (cocktail: keyof CocktailDescriptions) => {
  setSelectedCocktail(cocktail);
}

const cocktailDescriptions: CocktailDescriptions = {
  Negroni: "gin, campari, vermuth",
  Margarita: "tequila,lime,triple sec",
  "Piña colada": "Run blanco, coconut cream, anana ",
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
  Caipiriña: "cachaha, jugo de limon, azucar",
};

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
      <main className="w-full relative ">
        <div>
            <img
            className=" w-full object-cover absolute inset-0"
            src="images/fondo-madera.jpg"
            alt="madera"
            />
        </div>
        <div className="relative z-10">
          <div className="w-full  ">
            <h1 className="text-4xl text-white text-center p-5">Menu</h1>
          </div>
          <div className="w-full flex flex-row-reverse">
            <div className="w-2/4 flex-col justify-end bg-gray-600 mx-52 rounded-lg">
              <div>
                <h2 className="text-center text-3xl text-white ">
                  Lista di cocktails
                </h2>
              </div>
              <div>
                <ul className="text-white pl-10">
                  <li>Negroni</li>
                  <li>Margarita</li>
                  <li>Piña colada</li>
                  <li>Mojito</li>
                  <li>Negroni Sbagliato</li>
                  <li>Sex on the beach</li>
                  <li>Daiquiri</li>
                  <li>Martini</li>
                  <li>Long Island</li>
                  <li>Bloody Mary</li>
                  <li>Mai Tai</li>
                  <li>Tom Collins</li>
                  <li>Aperol Spritz</li>
                  <li>Hugo Spritz</li>
                  <li>Old Fashioned</li>
                  <li>Expresso Martini</li>
                  <li>Caipiriña</li>
                </ul>
              </div>
            </div>
            <div className="w-2/4 h-56">
              <h1 className="text-white">aqui va la imagen</h1>
              <img
                className="p-10 rounded-full"
                src="/images/cocktails/negroni1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
      <div>

      <Footer />
      </div>
    </div>
  );
}
