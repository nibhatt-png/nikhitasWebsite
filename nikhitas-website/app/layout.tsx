import type { Metadata } from "next";
import { Figtree, Inter, Shantell_Sans } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-figtree",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-shantell",
});

export const metadata: Metadata = {
  title: "Nikhita Bhatt",
  description: "Nikhita Bhatt — Computer Science & Economics at Harvey Mudd + Claremont McKenna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${inter.variable} ${shantellSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
