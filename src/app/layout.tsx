import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppNavBar from "./components/AppNavbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Ward",
  description: "Full Stack Node Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppNavBar />
        {children}
      </body>
    </html>
  );
}
