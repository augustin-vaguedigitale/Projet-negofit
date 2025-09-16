import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import { MouseFollower } from "./components/MouseFlowers";
import Script from "next/script";
import LoaderAnimate from "./components/loaderAnimate";


export const metadata: Metadata = {
  title: "Negofit | Négoce Technique & Fourniture Industrielle",
  description: "Negofit SARL, leader en Côte d'Ivoire dans le négoce technique et la fourniture industrielle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoaderAnimate/>
        <Header />
        <main> 
           <div className="bg-white relative overflow-x-hidden">
            <MouseFollower />
          </div>
          {children}
          </main>
        <Footer />

        
       
       
       
       
        
      </body>
    </html>
  );
}
