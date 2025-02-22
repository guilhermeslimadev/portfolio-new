import type { Metadata } from "next";
import "./globals.css";
import { Inter, Oxanium } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfólio | Guilherme",
  description: "portfólio pessoal",
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${oxanium.variable} ${inter.variable}`} lang="en">
      <body className="bg-gray-900 text-gray-100 antialiased flex flex-col gap-16">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
