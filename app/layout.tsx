// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Product Listing",
  description: "Product listing sample app"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
