import React from 'react';
import { Flex, Button, Input, Stack, Textarea } from '@chakra-ui/react';

const TextInputs = ({ textInputs, onChange, handleCreatePost, loading }) => {


  return (
    <Stack spacing={3} width='100%'>
      <Textarea 
        name='body'
        value={textInputs.body}
        onChange={onChange}
        fontSize='10pt'
        borderRadius={4}
        height='100px'
        placeholder="Text"  
        _placeholder={{ color: 'gray.500' }}
        _focus={{ outline: 'none', bg: 'white', border: '1px solid', borderColor: 'black' }}
      />
      <Flex justify="flex-end">
        <Button
          height="30px"
          padding="0px 30px"
          isDisabled={!textInputs.body} // Using the variable for clarity
          isLoading={loading}
          onClick={handleCreatePost}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};

export default TextInputs;
