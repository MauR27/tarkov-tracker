import type { Metadata } from "next";
import { GlobalContextProvider } from "@/context/GlobalContext";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";

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
          <GlobalContextProvider>
            <Navbar />
            {children}
          </GlobalContextProvider>
        </Providers>
      </body>
    </html>
  );
}
