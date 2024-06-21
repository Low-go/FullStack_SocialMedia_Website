import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import { Stack, Spinner } from '@chakra-ui/react';

const Posts = () => {
    const [loading, setLoading] = useState(true); // Assume loading initially
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts?sort=-created_at');
            setPosts(response.data.posts); // Ensure that you're setting an array
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

    return (
        <Stack>
            {Array.isArray(posts) && posts.map(post => <PostItem key={post._id} post={post} />)}
        </Stack>
    )
}

export default Posts;
