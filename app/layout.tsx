"use client"

import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ChakraProvider>
        <Navbar/>
        {children}
        <Footer/>
        </ChakraProvider>
        </body>
    </html>
  );
}
