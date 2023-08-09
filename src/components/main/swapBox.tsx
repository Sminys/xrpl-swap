import { Box }  from '@chakra-ui/react';

import SwapTabs from './swapTabs';

export default function swapBox() {
    return(
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
          alignContent={"center"}      
        >
          <SwapTabs/>
        </Box>
    );
}
