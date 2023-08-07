'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import Header  from './components/Header';
import { Box } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body>
        <Providers>
          <Header />
            {children}
        </Providers>
      </body>
    </>
  );
}