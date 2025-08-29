import { Toaster } from "@/components/ui/sonner";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarbonScan.ai",
  description: "CarbonScan.ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
