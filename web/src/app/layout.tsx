import type { Metadata } from "next";
import { Baloo_2, Roboto } from "next/font/google";

import Header from "@/components/Header";
import Providers from "@/providers";

import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mei Services",
  description: "Mei Services Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${baloo2.variable} ${roboto.variable} antialiased`}>
          <Header />
          <section className="p-4 py-8">
            <div className="max-w-7xl mx-auto">{children}</div>
          </section>
        </body>
      </Providers>
    </html>
  );
}
