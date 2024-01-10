
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"

export default function Header () {

    return (
        <div className="flex flex-col relative">
            <div className="flex  relative z-20">
                <NavBar />
                <NavBarMobile />
           </div>
           
            <div className="flex object-contain relative overflow-hidden">
                <video muted autoPlay loop className="w-full relative z-10 absolute inset-0 object-cover"  src="images/pizzavideo.mp4"></video>
            </div>
        </div>
    );
}