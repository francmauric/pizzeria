import Image from "next/image";

export default function Banner () {

    return(
        <div className="w-full ">
            <Image className=" w-full h-52 bg-cover" src="/images/banner-breakfast1.jpg" alt="banner" width={1920} height={1080} />
        </div>
    )
}