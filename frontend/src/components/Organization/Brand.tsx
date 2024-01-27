import Image from "next/image";
import { FC } from "react";

interface BrandProps {
    name: string;
    iconURL?: string;
}

const Brand: FC<BrandProps> = ({ name, iconURL }) => {
    return (
        <div
            className="w-[100svw] min-h-[40vh] md:min-h-[35vh] lg:min-h-[30vh] flex justify-center items-center gap-5"
            style={{
                background: `rgba(0, 123, 255, 0.2)`,
            }}
        >
            {iconURL && (
                <Image alt={name} src={iconURL} height={50} width={50} />
            )}
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {name}
            </h1>
        </div>
    );
};

export default Brand;
