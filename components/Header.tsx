import NavBar from "./NavBar"

export default function Header () {

    return (
        <div className="flex flex-col">
            <div className="flex h-28">
                <NavBar />
            </div>
            <div className="flex">
                <video muted autoPlay loop className="w-full"  src="images/pizzavideo.mp4"></video>
            </div>
        </div>
    )
}