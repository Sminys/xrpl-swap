import {
    Tabs,
    TabList,
    Tab,
    Stack,
    Box,
    Stat,
    StatNumber,
    StatHelpText,
    Button,
    Input,
    TabPanels,
    TabPanel
} from "@chakra-ui/react"
import TokenMenu from "./tokenMenu";
import { SetStateAction } from "react";
import React from "react";

export default function swapBox(){
     return(
        <Tabs variant={"unstyled"}>
            <TabList>
              <Tab _selected={{ color : 'black'}} >Swap</Tab>
              <Tab _selected={{ color : 'black'}} >Option</Tab>
            </TabList>  
            <TabPanels>
              <TabPanel>
                <Stack spacing="6" pt={"20px"}>
                  <Box backgroundColor={"rgba(229, 231, 239, 0.3)"} borderRadius={"14px"}>
                    <Stack spacing="5" direction={"row"} padding="10px">
                      <InputForm/>
                      <Stack padding={"10px"}>
                        <TokenMenu/>
                      </Stack>                  
                    </Stack>
                  </Box>
                  <Stack spacing="6">
                    <Box backgroundColor={"rgba(229, 231, 239, 0.3)"} borderRadius={"14px"}>
                      <Stack spacing="5" direction={"row"} padding="10px">
                        <InputForm/>
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
              </TabPanel>
              <TabPanel>
                Test
              </TabPanel>
            </TabPanels>
          </Tabs>
     );
}

function InputForm() {
  const [value, setValue] = React.useState('')
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => setValue(event.target.value)

  return (
    <Stack direction={"column"} >
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Input Token`s amount'
        size='sm'
        width={"215px"}
        borderColor={"rgba(229, 231, 239, 0)"}
        />
      <text>Value: {value}</text>
    </Stack>
  )
}