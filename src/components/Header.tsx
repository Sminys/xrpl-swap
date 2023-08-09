import {
    Stack,
    Box,
    Heading,
    Center,
    Link
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  import LogoImage from "../../public/X_logo.png"
  import Image from "next/image"


  export default function Header() {
    return (
        <Stack direction={['row']} maxW={"1920px"} display={"flex"} justifyContent={"space-between"} alignContent={"center"} margin={"5"}>
            <Stack direction={['column', 'row']} spacing='24px'>
                <Link as={NextLink} href='/'>
                    <Image width={"30"} height={"25"} objectFit='cover'src={LogoImage} alt='XRPL-swap Icon' />                
                </Link>    
                    <Heading as={NextLink} href="/" cursor="pointer" size="1.5xl" textShadow={"1.5px 1.5px #E9E9E9"} >
                        XRPL Swap
                    </Heading>
            </Stack>
            <Stack direction={['column', 'row']} spacing='40px' >
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
            <Stack alignItems={"right"} border={"1px"} borderRadius={"28px"} width="100px" borderColor={"#4A4FFF"} textColor={"#4A4FFF"} >
                <button>
                    Connect
                </button>
            </Stack>
        </Stack>
    )
}
