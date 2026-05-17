import {
  Anton,
  Inter,
  Share_Tech_Mono,
  Cinzel,
  Outfit,
  Permanent_Marker
} from "next/font/google";
import "./globals.css";

// Base Valorant Font for headers
const anton = Anton({ weight: '400', subsets: ["latin"], variable: "--font-anton" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Agent-Specific Thematic Fonts
const techMono = Share_Tech_Mono({ weight: '400', subsets: ["latin"], variable: "--font-tech" }); // Killjoy / Cypher
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" }); // Reyna / Fade
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" }); // Jett / Neon
const marker = Permanent_Marker({ weight: '400', subsets: ["latin"], variable: "--font-marker" }); // Raze

export const metadata = {
  title: "VALOWIKI // DATABASE",
  description: "Official Valorant VCT Agent Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`
      ${anton.variable} 
      ${inter.variable} 
      ${techMono.variable}
      ${cinzel.variable}
      ${outfit.variable}
      ${marker.variable}
    `}>
      <body className="vct-base-theme">{children}</body>
    </html>
  );
}
