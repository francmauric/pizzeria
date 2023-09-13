import NavBar from "./NavBar"

export default function Header () {

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1>RISTORANTE e pizzeria</h1>
            <div>
                <video muted autoPlay loop className="w-full"  src="images/pizzavideo.mp4"></video>
            </div>
        </div>
    )
}