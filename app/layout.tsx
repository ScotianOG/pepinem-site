import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
      <body className={`${roboto.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
