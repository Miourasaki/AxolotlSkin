import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Axolotl Minecraft Skin SpaceStation | By Unnamed Proj. Network",
  description: "Generated by create next app",
  icons: "https://api.mio.am/project/axolotl/icon"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
