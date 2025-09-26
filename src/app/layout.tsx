import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { MouseFollower } from "./components/MouseFlowers";
import LoaderAnimate from "./components/loaderAnimate";
import Header from "./components/header";


export const metadata: Metadata = {
  title: "Negofit SARL | Import-Export & Fournitures Industrielles",
  description: "Negofit SARL, leader en Côte d'Ivoire dans le négoce technique et la fourniture industrielle.",
  keywords: ["Negofit", "fournitures industrielles", "import-export", "Côte d'Ivoire", "matériel industriel"],
  alternates: {
    canonical: "https://www.negofit.org",
  },
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
       <Header/>
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
