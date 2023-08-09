'use client'

import Image from 'next/image'
import SwapBox from '../components/main/swapBox'
import {
  Container,
  Stack,
} from '@chakra-ui/react'
import Header from '../components/Header'
import styles from "../styles/main.module.css"
import BgImg from "../../public/Img-background.png"

export default function Home() {
  return (
    <div className={styles.background} >
      <Header/>
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8" pt="100px">
        <SwapBox/>
        </Stack>
      </Container>
    </div>
  )
}
