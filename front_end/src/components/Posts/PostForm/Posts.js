import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

const Posts = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/api/posts?sort=-created_at');
            console.log('Retrieved Posts:', response.data);
            setPosts(response.data.posts); // Ensure that you're setting an array
        } catch (error) {
            console.log('getPosts error', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            {Array.isArray(posts) && posts.map(post => <PostItem key={post._id} post={post} />)}
        </>
    )
}

export default Posts;
