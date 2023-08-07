import {
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
  } from '@chakra-ui/react'
  import { forwardRef, useRef } from 'react'
  
  export const amountField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  
  
    return (
      <FormControl>
        <FormLabel htmlFor="secondAmount"></FormLabel>
        <InputGroup>
          <InputRightElement>
          </InputRightElement>
          <Input
            id="toSwapToken"
            name="swapToken"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    )
  })
  
  amountField.displayName = 'amountField'