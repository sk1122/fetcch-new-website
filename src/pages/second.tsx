import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });
const cormorantLight = Cormorant_Garamond({
	weight: "300",
	subsets: ["latin"],
});

export default function Second() {
    return (
        <main
			className={`flex min-h-screen flex-col items-center justify-center space-y-20 ${inter.className}`}
		>
            <div className="w-full space-y-8 flex flex-col justify-center items-center">
                <h1 className={`text-6xl ${cormorantLight.className}`}>
                    <span className={cormorant.className}>What is</span> <span className="text-gray-400">Pull Payments Layer?</span>
                </h1>
                <p className={`${inter.className} text-md text-center w-1/2 text-gray-300`}>
                    Instead of the traditional approach in blockchain where the sender initiates the transaction, with Pull Payments, the tables are turned. Imagine you've availed a service and instead of sending the money directly, the service provider sends you a detailed payment request. The receiver sets up this request, pre-filled with all transaction specifics, and dispatches it to the sender’s wallet, functioning much like a straightforward notification. 

                    When the sender spots this notification in their wallet, they can conveniently open it, review the outlined details, and with a quick confirmation, approve the payment. What’s fascinating is the way the payment is then processed. The system pulls the mentioned amount from the sender’s account, but it’s done with the the sender’s authority.

                    Moreover, the evolving landscape of digital wallets is making this process even slicker. The upcoming auto-approve feature in many wallets promises to streamline this further. Regular or trusted transactions can be set to get approved automatically, minimizing the need for manual checks each time. In simple terms, Pull Payments lets the receiver start the payment process while the sender still has the final approval. This creates a clear and easy way for both sides to handle transactions.
                </p>
            </div>
        </main>
    )
}