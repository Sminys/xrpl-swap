import {
    Box,
    Button,
    HStack,
    Stack,
    TabList,
    Tabs,
    Tab,
    TabIndicator,
    Stat,
    StatNumber,
    StatHelpText,
}  from '@chakra-ui/react';

import TokenMenu from './tokenMenu';

export default function swapBox() {
    return(
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Tabs variant={"unstyled"} colorScheme='green'>
            <TabList>
              <Tab>Swap</Tab>
              <Tab>Buy</Tab>
            </TabList>  
              <Stack spacing="6" pt={"20px"}>
                <Box backgroundColor={"rgba(229, 231, 239, 0.3)"} borderRadius={"14px"}>
                  <Stack spacing="5" direction={"row"} padding="10px">
                    <Stat padding={"6px"}>
                      <StatNumber>12</StatNumber>
                      <StatHelpText>$30002.381</StatHelpText>
                    </Stat>
                    <Stack padding={"10px"}>
                      <TokenMenu/>
                    </Stack>                  
                  </Stack>
                </Box>
                <Stack spacing="6">
                  <Box backgroundColor={"rgba(229, 231, 239, 0.3)"} borderRadius={"14px"}>
                    <Stack spacing="5" direction={"row"} padding="10px">
                      <Stat padding={"6px"}>
                        <StatNumber>30000</StatNumber>
                        <StatHelpText>$30000.00</StatHelpText>
                      </Stat>
                      <Stack padding={"10px"}>
                        <TokenMenu/>
                      </Stack>                  
                    </Stack>
                    </Box>
                  </Stack>  
                <Stack spacing="6">
                  <Button background={"rgba(74, 146, 255, 0.2)"}>Swap</Button>
                </Stack>
              </Stack>
          </Tabs>
        </Box>
    );
}
