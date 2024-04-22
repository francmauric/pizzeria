import "@/style/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NavBarMobile from "@/components/NavBarMobile";
import Banner from "@/components/Banner";

export default function ristorante() {
  return (
    <div>
      <div className="w-full ">
        <div className="flex flex-col relative">
          <div className="flex  relative z-20 ">
            <NavBar />
            <NavBarMobile />
          </div>
          <div className="flex object-contain relative overflow-hidden">
            <img
              className="w-full relative z-10 absolute inset-0 object-cover"
              src="images/tavolo.jpeg"
              alt="tavolo"
            />
          </div>
        </div>
      </div>
      <div>
        <Banner />
      </div>
      <main>
        {/* vista escritorio */}
        <div className="bg-gray-400">
          <h1 className="p-2 text-3xl bg-white">Menu</h1>
          <div className="bg-green-200 p-2">
            <div className="bg-gray-200">
              <h2 className="p-2 text-xl">Primi Piatti</h2>
              <ol>
                <li>Spaghetti alle volgole</li>
                <li>Spaghetti ai Frutti di mare</li>
                <li>Tagliolini all'Astice</li>
                <li>Tagliolini al Salmone</li>
                <li>Gnocchi Zucchine e Scampi</li>
                <li>Ravioli al Salmone</li>
                <li>Risotto ai Frutti di mare</li>
                <li>Spaghetti alla Carbonara</li>
                <li>Spaghetti al Pesto</li>
                <li>Gnocchi al Gorgonzola</li>
              </ol>
            </div>
            <div className="bg-blue-200 p-2">
              <h2 className="p-2 text-xl">Secondi</h2>
              <ol>
                <li>Frittura di Calamari</li>
                <li>Fritto misto</li>
                <li>Grigleata mista</li>
                <li>Branzino alla Ligure</li>
                <li>Branzino all griglia</li>
                <li>Orata con Patate e Porcini</li>
                <li>Orata alla griglia</li>
                <li>Gamberoni alla griglia</li>
                <li>Milanese</li>
                <li>Scaloppina a scelta</li>
              </ol>
            </div>
          </div>
        </div>
        {/* vista responsive */}
        <div></div>
      </main>
      <Footer />
    </div>
  );
}
