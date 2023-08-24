import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: "600", subsets: ["latin"] });
const cormorantLight = Cormorant_Garamond({
	weight: "300",
	subsets: ["latin"],
});

export default function Post({
    name,
    desc,
    link,
    image
}: any) {
    return (
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center rounded-md p-5 bg-white text-black space-y-4">
            {/* <div className="w-full h-40 bg-gray-500 rounded-md"></div> */}
            <img src={image} alt={image} className="w-full h-40 bg-gray-500 rounded-md" />
            <div>
                <h1 className={`${inter.className} text-center text-xl`}>{name}</h1>
                <p className={`${inter.className} text-center text-sm text-gray-500`}>{desc}</p>
            </div>
            <a className="text-sm px-2 py-1 rounded-md bg-black text-white" href={link}>Read More</a>
        </div>
    )
}