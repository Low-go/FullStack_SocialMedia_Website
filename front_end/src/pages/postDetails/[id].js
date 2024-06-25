import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Flex, Box, Text, Stack } from '@chakra-ui/react';

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
      justify="flex-start" // Align to the top of the viewport
      minHeight="100vh"
      width="100%"
      pt={{ base: "4", md: "8" }} // Adjust top padding to raise the box
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
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "75%" }}
        p={4}
        fontFamily="'Arial', sans-serif"
      >
        <Stack spacing={4} height="100%">
          <Text fontSize="14pt" fontWeight="bold">
            {post.content}
          </Text>
          <Text
            fontSize="10pt"
            color="gray.700"
            mt="auto" // Automatically margin at the top to push to the bottom
          >
            Posted by {post.author.username} at {new Date(post.created_at).toLocaleString()}
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default PostDetails;
