import { Inconsolata } from "next/font/google";
import "./globals.css";
import ConnectWallet from "../components/common/ConnectWallet";
import Header from "@/components/common/Header";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "FaucETH",
  description: "For a smooth swim, ensuring you don't sink into testnet pools.",
};

export default function RootLayout({ children }) {
  const logged = true;
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {logged ? (
          <div>
            <Header />
            {children}
          </div>
        ) : (
          <ConnectWallet />
        )}
      </body>
    </html>
  );
}
