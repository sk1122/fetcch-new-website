import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: "600", subsets: ["latin"] });
const cormorantLight = Cormorant_Garamond({
	weight: "300",
	subsets: ["latin"],
});

export default function Third() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
		>
			<div className="w-full h-1/3 flex flex-col justify-center items-center space-y-8">
            <h1 className={`text-8xl ${cormorant.className}`}>
                    <span className={cormorant.className}>Integrate</span> <span className="text-gray-400">Pull Payments Layer?</span>
                </h1>
				<p
					className={`text-xl text-center w-2/3 ${cormorantLight.className}`}
				>
					It will help your wallet or application to make your
					experience smoother by enabling you to pull instead of push
				</p>
				<div className="flex justify-center items-center space-x-4">
					<button
						data-tally-open="w2a1jV"
						data-tally-layout="modal"
						data-tally-emoji-text="😳"
						data-tally-emoji-animation="wave"
					>
						<div
							className={`cursor-pointer rounded-md px-4 py-2 font-md text-black border-2 bg-white hover:text-white hover:bg-black hover:border-2 hover:border-white duration-300`}
						>
							Add yourself &#8599;
						</div>
					</button>
					<a
                        href="https://calendly.com/sk1122/fetcch?month=2023-08"
                        target="_blank"
						className={`cursor-pointer rounded-md px-4 py-2 font-md text-white border-2 border-white hover:text-black hover:bg-white duration-300`}
					>
						Talk with Us
					</a>
				</div>
			</div>
            <p>© {new Date().getFullYear()} Fetcch, Ltd</p>
		</main>
	);
}
