import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "SANTOKI Cyber Marketplace | Buy & Sell Cyber Gear",
 description: "Shop and list ethical security learning devices, electronics lab tools, development boards and authorized testing equipment.",
 robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
