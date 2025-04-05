import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";  



export const metadata: Metadata = {
  title: "Portfolio - Marnick SAKALA",
  description: "Portfolio - Marnick SAKALA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-nighteye="disabled">
      <body className=" overflow-x-hidden">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
