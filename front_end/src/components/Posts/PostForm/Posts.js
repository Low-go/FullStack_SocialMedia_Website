import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import { Stack, Spinner } from '@chakra-ui/react';

const Posts = () => {
    const [loading, setLoading] = useState(true); // Assume loading initially
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts?sort=-created_at'); //get all posts
            setPosts(response.data.posts); 
        } catch (error) {
            console.error('getPosts error', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return ( //loop through and create postItems
        <Stack>
            {Array.isArray(posts) && posts.map(post => <PostItem key={post._id} post={post} />)} 
        </Stack>
    )
}

export default Posts;
