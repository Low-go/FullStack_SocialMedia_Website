import React from 'react';
import { Flex, Button, Input, Stack, Textarea } from '@chakra-ui/react';

const TextInputs = () => {
  return (
    <Stack spacing = {3} width='100%'>
        <Input 
         name='title'
        //  value={}
        //  onChange={}
         fontSize='10pt'
         borderRadius={4}
         placeHolder="Title"
         _placeholder={{ color: 'gray.500'}}
         _focus={{ outliine: 'none', bg: 'white', border : '1px solid', borderColor: 'black'}}

        />
        <Textarea />
        <Flex>
            <Button>Post</Button>
        </Flex>
    </Stack>
  )
}

export default TextInputs
