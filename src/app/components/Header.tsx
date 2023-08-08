import {
    Stack,
    Box,
    Heading,
    Center
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  import logoImage from "../../../public/X_logo.svg"



  export default function Header() {
    return (
        <Stack direction={['column', 'row']} verticalAlign={"center"} spacing="680px" pt="20px" pl="70px">
            <Stack direction={['column', 'row']} spacing='24px'>
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textShadow={"1.5px 1.5px #E9E9E9"}>
                    XRPL Swap
                </Heading>
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' >
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textColor={"#4A4FFF"} textStyle={"bold"} 
                       _hover={{color:"#4A4FFF"}}>
                    Swap
                </Heading>
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textColor={"rgba(0, 0, 0, 0.4)"} opacity={"40%"}
                       _hover={{color:"#4A4FFF"}}>
                    Token
                </Heading>
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textColor={"rgba(0, 0, 0, 0.4)"} opacity={"40%"}
                    _hover={{color:"#4A4FFF"}}>
                    pools
                </Heading>
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textColor={"rgba(0, 0, 0, 0.4)"} opacity={"40%"}
                    _hover={{color:"#4A4FFF"}}>
                    Menu
                </Heading>
            </Stack>
            <Stack alignItems={"right"} border={"1px"} borderRadius={"28px"} width="100px" borderColor={"#4A4FFF"} textColor={"#4A4FFF"}>
                <button>
                    Connect
                </button>
            </Stack>
        </Stack>
    )
}
