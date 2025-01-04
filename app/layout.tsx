import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const microFLF = localFont({
  src: "../public/fonts/MicroFLF.ttf",
  variable: "--font-micro-flf",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "PEPinem - The Frog Rap Legend",
  description:
    "From the pond to platinum, PEPinem is revolutionizing the rap game.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${microFLF.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
