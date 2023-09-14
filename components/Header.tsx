import NavBar from "./NavBar"

export default function Header () {

    return (
        <div>
            <div>
                <NavBar />
                <video muted autoPlay loop className="w-full"  src="images/pizzavideo.mp4"></video>
            </div>
            <div>
            </div>
        </div>
    )
}