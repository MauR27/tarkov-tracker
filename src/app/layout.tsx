import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const share = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Tarkov Quest Tracker",
  description: "Tarkov quest tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={share.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
