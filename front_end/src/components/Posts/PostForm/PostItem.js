import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const PostItem = ({ post }) => {
  return (
    <Flex border='1px solid' 
      bg='white' 
      borderColor='gray 300' 
      borderRadius={4} 
      _hover={{ borderColor: "gray.500"}} 
      cursor= 'pointer' 
      onClick={() => console.log('Post selected')}>

      <Flex direction='column'
        align='center'
        bg='gray.100'
        p={2}
        width="40px"
        borderRadius={4}>
      </Flex>
      <Flex direction="column" width="100%">
        <Stack spacing={1} p="10px">
          <Stack direction="row" 
            spacing={0.6} 
            align="center" 
            fontSize="9pt"
            >
              <Text>Posted by {post.author}</Text>
              <Text>{post.content}</Text>
          </Stack>
        </Stack>
      </Flex>

    </Flex>
  )
}

export default PostItem;
