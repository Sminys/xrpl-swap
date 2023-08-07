'use client'

import Image from 'next/image'
import Header from "./components/Header"
import {
  Box,
  Button,
  Container,
  HStack,
  Stack,
  TabList,
  Tabs,
  Tab,
  TabIndicator,
  Stat,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import TokenMenu from './components/tokenMenu'
//import { amountField } from './components/amountField'
import SwapBox from './components/swapBox'

export default function Home() {
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <SwapBox/>
    </Stack>
  </Container>
  
  )  
}
 