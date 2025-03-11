import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";



export const metadata: Metadata = {
  title: "MK PORTFOLIO",
  description: "MKMUGI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
