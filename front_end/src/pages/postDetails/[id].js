import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Flex, Box, Text, Stack, VStack, Spacer } from '@chakra-ui/react';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query; // get the post's ID from the URL parameters

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('getPost error', error.message);
      }
    };

    if (id) {
      getPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      minHeight="100vh"
      width="100%"
      pt={{ base: "4", md: "8" }}
    >
      <Box
        borderWidth="2px"
        bg="white"
        borderColor="#00887a"
        borderRadius="8"
        boxShadow="md"
        _hover={{ boxShadow: "lg", borderColor: "#00887a", borderWidth: "3px" }}
        cursor="pointer"
        minHeight="200px"
        width={{ base: "95%", sm: "90%", md: "90%", lg: "75%", xl: "55%" }}
        p={4}
        fontFamily="'Arial', sans-serif"
        position="relative" // Add position relative to the Box
      >
        <VStack spacing={4} 
          height="100%"
          align="start"
          paddingLeft={2}
          >
          <Text fontSize="14pt" fontWeight="bold">
            {post.content}
          </Text>
          <Spacer /> {/* This will push the content above to the top and content below to the bottom */}
          <Text
            fontSize="10pt"
            color="gray.700"
            position="absolute" // Position the Text absolutely
            bottom="4" // Distance from the bottom of the Box
            width="100%" // Ensure the Text spans the width of the Box
          >
            Posted by {post.author.username} at {new Date(post.created_at).toLocaleString()}
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default PostDetails;
