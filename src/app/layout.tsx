"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { useState } from "react";
import { metadata } from "@/metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(false);
  return (
    <html lang="en">
      <body className={`${inter.className} ${isDark ? "dark" : "light"}`}>
        <div className="dark:bg-slate-900 dark:text-white">
          <Header isDark={isDark} setIsDark={setIsDark} />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
