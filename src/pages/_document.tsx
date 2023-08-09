'use client'

import { ColorModeScript, background } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from './_app'
import Header from '../components/Header'
import backgroundImg from "../../public/Img-background.png";
import Image from 'next/image'


export default function Document() {
  return (
    <Html lang='en'>
      <Head/>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}