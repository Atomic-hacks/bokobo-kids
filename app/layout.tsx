import type { Metadata } from "next";
import { Fredoka, Ubuntu } from "next/font/google";
import "./globals.css";
import Nav from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

// Friendly rounded font for body text
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // multiple weights for flexibility
});

// African-inspired font for headings
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "African Kids Library",
  description: "A joyful and engaging library experience for children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${ubuntu.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
