import { Flex, Box, Text, Stack } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

const PostItem = ({ post }) => {
  return (
    <Flex
      borderWidth='2px' // Set general border width
      bg='white'
      borderColor='#00887a' // Set initial border color
      borderRadius={8}
      p={4}
      boxShadow='md'
      _hover={{ boxShadow: "lg", borderColor: "#00887a", borderWidth:'3px' }} // Keep hover effect without changing border width
      cursor='pointer'
      onClick={() => console.log('Post selected')}
      minHeight="200px"
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }} // Responsive widths
      // margin="20px auto"
      direction="column"
      fontFamily="'Arial', sans-serif"
    >
      <Box>
        <Stack spacing={2} mb={2}>
          <Stack direction="row" spacing={1} align="center" fontSize="10pt" color="gray.700">
            <Text fontWeight="bold">Posted by</Text>
            <Text>____</Text>
            <Text>{post.created_at ? moment(post.created_at).fromNow() : ''}</Text>
          </Stack>
          <Text fontSize="14pt" fontWeight="bold" isTruncated>
            {post.content}
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default PostItem;
