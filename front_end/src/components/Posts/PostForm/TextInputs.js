import React from 'react';
import { Flex, Button, Input, Stack, Textarea } from '@chakra-ui/react';

const TextInputs = ({ textInputs, onChange, handleCreatePost, loading }) => {


  return (
    <Stack spacing={3} width='100%'>
      <Input 
        name='title'
        value={textInputs.title}
        onChange={onChange}
        fontSize='10pt'
        borderRadius={4}
        placeholder="Title"  
        _placeholder={{ color: 'gray.500' }}
        _focus={{ outline: 'none', bg: 'white', border: '1px solid', borderColor: 'black' }}
      />
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
          disabled={!textInputs.title} // Using the variable for clarity
          isLoading={loading}
          onClick={handleCreatePost}
          _disabled={{ 
            bg: 'gray.300',
            cursor: 'not-allowed',
          }}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};

export default TextInputs;
