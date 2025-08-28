import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // common weights
  variable: "--font-roboto",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "RePut.ai",
  description: "RePut.ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
