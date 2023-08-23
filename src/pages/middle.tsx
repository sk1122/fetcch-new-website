import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });
const cormorantLight = Cormorant_Garamond({
	weight: "300",
	subsets: ["latin"],
});

export default function Middle() {
    return (
        <main
			className={`flex min-h-screen flex-col items-center justify-center space-y-20 ${inter.className}`}
		>
            <div className="w-full space-y-8 flex flex-col justify-center items-center">
                <h1 className={`text-6xl ${cormorantLight.className}`}>
                    <span className={cormorant.className}>Why is</span> <span className="text-gray-400">Pull Payments Layer?</span>
                </h1>
                <p className={`${inter.className} text-md text-center w-1/2 text-gray-300`}>
                Blockchain technology, with its transformative use cases such as cross-border transactions, Instant settlement, ownership of funds, and many more has redefined our understanding of modern transactions. While its capabilities are vast and groundbreaking, it isn't without its shortcomings. Unlike traditional payment systems that seamlessly integrate both push and pull transaction mechanisms for efficiency and convenience, blockchain grapples with the notable absence of pull payments. In contrast, the absence of pull payments in blockchain hampers users from setting up regular bills, creates hurdles for businesses trying to achieve streamlined transactions, and stalls automated transfers, among many such challenges
                </p>
            </div>
        </main>
    )
}