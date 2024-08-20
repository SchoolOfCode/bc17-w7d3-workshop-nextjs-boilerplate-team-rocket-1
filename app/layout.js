import { Aleo } from "next/font/google";
import "./globals.css";
import Header from "../src/components/Header/Header.jsx";
import Footer from "../src/components/Footer/Footer.jsx";

const aleo = Aleo({ subsets: ["latin"] });

export const metadata = {
  title: "Fireplace Palace",
  description: "Discover the perfect fireplace",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
