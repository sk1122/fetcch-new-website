import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Button from "@/components/Button";
import Post from "@/components/Post";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: "600", subsets: ["latin"] });
const cormorantLight = Cormorant_Garamond({
	weight: "300",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main
			className={`flex flex-col md:flex-row space-y-10 md:space-y-0 min-h-screen overflow-hidden items-between justify-center ${inter.className}`}
		>
			{/* <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FDB658] blur-[150px] -right-40 -bottom-0"></div> */}
			<div className="z-50 w-full h-1/3 flex flex-col justify-center items-start space-y-8">
				<h1 className={`text-8xl ${cormorant.className}`}>
					Pull Payments Layer
				</h1>
				<p className={`text-gray-400 text-md md:text-xl w-full md:w-full ${inter.className}`}>
					It makes blockchain transactions smoother and more
					intuitive. By enabling wallets and applications to send
					chain-agnostic transaction requests directly to the user's
					endpoint, it brings a touch of the ease and simplicity we're
					used to with traditional online payments
				</p>
				<div className="flex justify-center items-center space-x-4">
					<a
						href="https://demo.fetcch.xyz"
						target="_blank"
						className={`cursor-pointer rounded-md px-4 py-2 font-md text-black border-2 bg-white hover:text-white hover:bg-black hover:border-2 hover:border-white duration-300`}
					>
						Demo &#8599;
					</a>
					<a
						href="https://docs.fetcch.xyz"
						target="_blank"
						className={`cursor-pointer rounded-md px-4 py-2 font-md text-white border-2 border-white hover:text-black hover:bg-white duration-300`}
					>
						Learn More
					</a>
				</div>
				{/* <img src="/request.png" width="900px" className="absolute right-0 top-1/2 -translate-y-1/2" /> */}
			</div>
			<div className="z-50 w-fit h-fit flex flex-col justify-center items-center space-y-8">
				<h1 className={`${cormorant.className} text-3xl text-gray-300`}>Check our latest research</h1>
				<Post image="https://writings.fetcch.xyz/assets/images/evolution-d776f1816794d6927ff743f6cd52c904.png" name="The State of DPN (Decentralized Payments Network)" desc="Payments have come a long way, starting with the simplicity of cash transactions where parties trusted the physical exchange. However, as our world became more connected, centralized payment networks like Visa..." link="https://writings.fetcch.xyz/state-of-dpn" />
				<Post image="https://writings.fetcch.xyz/assets/images/cross-chain-cowswap-flow-e05e93796be8b39fe3fb5910217a296d.png" name="How to think about Cross Chain CoWSwap?" desc="CoWSwap model is simple, they collect orders and share them with multiple solvers, solver’s job is to generate a batch of transactions to be executed on-chain which helps user swap their tokens" link="https://writings.fetcch.xyz/how-to-think-about-cross-chain-cowswap" />
			</div>
		</main>
	);
}
