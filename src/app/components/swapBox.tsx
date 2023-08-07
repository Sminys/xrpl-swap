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
          <Tabs>
            <TabList>
              <Tab>Swap</Tab>
              <Tab>Buy</Tab>
            </TabList>  
            <TabIndicator
              color={"white"}/>
              <Stack spacing="6" pt={"20px"}>
                <Stack spacing="5" direction={"row"}>
                  <Stat padding={"6px"}>
                    <StatNumber>12</StatNumber>
                    <StatHelpText>$30002.381</StatHelpText>
                  </Stat>
                  <Stack>
                    <TokenMenu/>
                  </Stack>
                </Stack>
                <HStack>
                  <Stat padding={"6px"}>
                      <StatNumber>30000</StatNumber>
                      <StatHelpText>$30000</StatHelpText>
                    </Stat>
                </HStack>
                <Stack spacing="6">
                  <Button>Swap</Button>
                </Stack>
              </Stack>
          </Tabs>
        </Box>
    );
}
