import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: "600", subsets: ["latin"] });
const cormorantLight = Cormorant_Garamond({
	weight: "300",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
		>
			<div className="z-50 w-full h-1/3 flex flex-col justify-center items-start space-y-8">
				<h1 className={`text-8xl ${cormorant.className}`}>
					Pull Payments Layer
				</h1>
				<p className={`text-xl w-2/3 ${cormorantLight.className}`}>
					It makes blockchain transactions smoother and more
					intuitive. By enabling wallets and applications to send
					chain-agnostic transaction requests directly to the user's
					endpoint, it brings a touch of the ease and simplicity we're
					used to with traditional online payments
				</p>
				<div className="flex justify-center items-center space-x-4">
					<div
						className={`cursor-pointer rounded-md px-4 py-2 font-md text-black border-2 bg-white hover:text-white hover:bg-black hover:border-2 hover:border-white duration-300`}
					>
						Demo &#8599;
					</div>
					<div
						className={`cursor-pointer rounded-md px-4 py-2 font-md text-white border-2 border-white hover:text-black hover:bg-white duration-300`}
					>
						Learn More
					</div>
				</div>
			</div>
		</main>
	);
}
