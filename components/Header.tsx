import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"

export default function Header () {

    return (
        <div className="flex flex-col">
            <div className="flex  relative z-20">
                <NavBar />
                <NavBarMobile />
            </div>
            <div className="flex">
                <video muted autoPlay loop className="w-full relative z-10"  src="images/pizzavideo.mp4"></video>
            </div>
        </div>
    )
}