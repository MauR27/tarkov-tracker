import "./globals.css";
import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import { GlobalContextProvider } from "@/context/GlobalContext";

const share = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Tarkov Tracker",
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
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
