import type { Metadata } from "next";
//import { Roboto } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";

//const roboto = Roboto({ subsets: ['vietnamese'], weight: ['100', '200', '300'] })

const myFont = localFont({
  src: [
    {
      path: "/Roboto-Thin.ttf",
      weight: "100",
    },
    {
      path: "/Roboto-Regular.ttf",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`  ${myFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
