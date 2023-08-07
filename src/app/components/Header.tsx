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
        <Stack direction={['column', 'row']} verticalAlign={"center"} spacing="680px" pt="20px" pl="30px">
            <Stack direction={['column', 'row']} spacing='24px'>
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textShadow={"1.5px 1.5px #E9E9E9"}>
                    XRPL Swap
                </Heading>
            </Stack>
            <Stack direction={['column', 'row']} spacing='24px' >
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textShadow={"1.5px 1.5px #E9E9E9"}>
                    Swap
                </Heading>
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textShadow={"1.5px 1.5px #E9E9E9"}>
                    Token
                </Heading>
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textShadow={"1.5px 1.5px #E9E9E9"}>
                    pools
                </Heading>
                <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textShadow={"1.5px 1.5px #E9E9E9"}>
                    Menu
                </Heading>
            </Stack>
            <Stack>
                <button>
                    Connect
                </button>
            </Stack>
        </Stack>
    )
}
