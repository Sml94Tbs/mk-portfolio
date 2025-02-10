import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Headers from "./components/layouts/header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "MK Portfolio",
  description: "Bienvenue sur le portfolio de MK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Headers/>
        {children}
      </body>
    </html>
  );
}
