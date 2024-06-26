import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Flex, Box, Text, Stack, VStack, Spacer, Button } from '@chakra-ui/react';
import { authState } from '../../atoms/authAtom';
import { useRecoilValue } from 'recoil';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query; // get the post's ID from the URL parameters
  const auth = useRecoilValue(authState); // so we can check user role


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

  const isAuthorized = () => {
    console.log('auth:', auth);
    console.log('post:', post);
    if (auth.user && post) {
      return auth.userId === post.author._id || auth.role === 'admin';
    }
    return false;
  };

  const handleUpdate = () => {
    console.log("Update button clicked.");
  }

  const handleDelete = () => {
    console.log("Delete Button clicked.");
  }  

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
        {isAuthorized() && (
          <Flex
          mt={4}
          justify="flex-end" // Aligns the Flex container to the end of the parent Box, which is the right side
          width="100%"
          position="absolute" // Position the Flex container absolutely
          bottom="4" // Distance from the bottom of the Box
          right="4" // Distance from the right of the Box
        >
          <Button colorScheme="teal" onClick={handleUpdate} mr={2}>Update</Button> {/* mr={2} adds margin to the right of the Update button */}
          <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
        </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default PostDetails;
