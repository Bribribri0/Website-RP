import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "DSTRTO CITY | FiveM Roleplay",
  description: "A premium GTA V FiveM roleplay website for DSTRTO CITY with immersive branding, community onboarding, and music controls.",
  metadataBase: new URL("https://dstrtocity.example"),
  icons: {
    icon: "/brand/DSTRTO2.png",
    apple: "/brand/DSTRTO2.png"
  },
  openGraph: {
    title: "DSTRTO CITY | FiveM Roleplay",
    description: "Your Story Begins Here.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
