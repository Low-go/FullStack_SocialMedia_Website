import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import React from 'react'

const SearchInput = () => {
  return (
    <Flex >
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input 
                placeholder='Search PostMe' 
                fontSize='10pt' 
                _placeholder={{ color: "gray.500"}} 
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: "blue.500",
                }}/>
        </InputGroup>
    </Flex>
  )
}

export default SearchInput
