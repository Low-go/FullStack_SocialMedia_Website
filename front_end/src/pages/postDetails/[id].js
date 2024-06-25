import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Box, Text } from '@chakra-ui/react';

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
    <Box minHeight="300px" p={4} boxShadow='md' borderWidth='2px' borderRadius={8}>
      <Text fontSize="14pt" fontWeight="bold">
        {post.content}
      </Text>
      <Text fontSize="10pt" color="gray.700">
        Posted by {post.author.username} at {new Date(post.created_at).toLocaleString()}
      </Text>
    </Box>
  );
};

export default PostDetails;
