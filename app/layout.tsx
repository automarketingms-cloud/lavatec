import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Lavatec",
  description: "Mantención, limpieza y reparación de lavadoras",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={playfair.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
