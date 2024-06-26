import React from 'react';
import { Flex, Box, Text, Stack } from '@chakra-ui/react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { authState } from '../../../atoms/authAtom';

const PostItem = ({ post }) => {
  const router = useRouter();
  

  const handleClick = () => {
    router.push(`/postDetails/${post._id}`);
    console.log("post selected");
  };

  return (
    <Flex
      borderWidth='2px'
      bg='white'
      borderColor='#00887a'
      borderRadius={8}
      p={4}
      boxShadow='md'
      _hover={{ boxShadow: "lg", borderColor: "#00887a", borderWidth:'3px' }}
      cursor='pointer'
      onClick={handleClick}
      minHeight="200px"
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
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
