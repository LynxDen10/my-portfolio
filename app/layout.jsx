import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "John Lyndon R. Sanggod | Junior Software Developer Portfolio",
  description:
    "Portfolio of John Lyndon R. Sanggod, a Junior Software Developer and Application Developer focused on web and mobile application development.",
  keywords: [
    "John Lyndon R. Sanggod",
    "Junior Software Developer",
    "Application Developer",
    "Full-stack Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "John Lyndon R. Sanggod" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Navbar />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
