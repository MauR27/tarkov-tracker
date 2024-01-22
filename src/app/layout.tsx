import "./globals.css";
import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import { GlobalContextProvider } from "@/context/GlobalContext";
import { Providers } from "./providers";
import { fonts } from "./fonts";

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
    <html lang="en" className={fonts.shareTechMono.variable}>
      <body>
        <Providers>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </Providers>
      </body>
    </html>
  );
}
