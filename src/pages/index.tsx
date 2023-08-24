import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Button from "@/components/Button";
import Home from "./home";
import Second from "./second";
import Third from "./third";
import Middle from "./middle";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: "600", subsets: ["latin"] });
const cormorantLight = Cormorant_Garamond({
	weight: "300",
	subsets: ["latin"],
});

export default function Index() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between px-12 pt-12 md:px-24 md:pt-24 ${inter.className}`}
		>
			<Head>
				<title>Fetcch - Pull Payments Layer</title>
			</Head>
			<Home />
            <Second />
            <Middle />
            <Third />

            <Script async src="https://tally.so/widgets/embed.js" />
		</main>
	);
}
