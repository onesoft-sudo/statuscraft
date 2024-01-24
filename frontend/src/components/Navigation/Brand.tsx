import logo from "@/images/logo.png";
import Image from "next/image";

const Brand = () => {
    return (
        <div className="flex items-center gap-2 place-self-center lg:place-self-auto">
            <Image src={logo.src} alt="Logo" height={35} width={35} />
            <span>StatusCraft</span>
        </div>
    );
};

export default Brand;
