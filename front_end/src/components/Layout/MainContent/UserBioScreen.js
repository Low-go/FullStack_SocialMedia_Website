import React, { useEffect } from 'react';
import { Box, Text, Image, Button, Flex } from '@chakra-ui/react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../../../atoms/authAtom';
import { formatDistanceToNow } from 'date-fns';
import { Inter } from 'next/font/google';
import jwtDecode from 'jwt-decode';

const inter = Inter({ subsets: ['latin'] });

const UserBioScreen = () => {
  const auth = useRecoilValue(authState);
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setAuth({
          isAuthenticated: true,
          user: decodedToken.username,
          userId: decodedToken.userId,
          role: decodedToken.role,
          created_at: decodedToken.created_at,
          bio: decodedToken.bio,
        });
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
  }, [setAuth]);

  if (!auth.isAuthenticated) {
    return <div>Loading...</div>;
  }

  const createdAt = new Date(auth.created_at);
  if (isNaN(createdAt.getTime())) {
    console.error('Invalid created_at date:', auth.created_at);
    return <div>Error: Invalid date format</div>;
  }

  const timeOnSite = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <Box
      width="100%"
      maxWidth="400px"
      height="400px"
      padding="16px"
      border="1px solid #ccc"
      borderRadius="8px"
      bg="white"
    >
      <Flex direction="column" align="center" height="100%">
        {/* First Row */}
        <Flex direction="row" align="center" width="100%" mb="8px">
          <Image boxSize="50px" src="/images/icon.jpg" alt="User" mr="8px" />
          <Text fontSize="lg" fontWeight="bold">
            {auth.user}
          </Text>
        </Flex>

        {/* Second Row */}
        <Flex direction="row" justify="space-between" width="100%" mb="8px">
          <Text fontSize="md">Been a member since:</Text>
          <Text fontSize="md">{timeOnSite}</Text>
        </Flex>

        {/* Third Row */}
        <Flex direction="row" justify="space-between" width="100%" mb="8px">
          <Text fontSize="md">Bio:</Text>
          <Text fontSize="md">{auth.bio || 'No bio available'}</Text>
        </Flex>

        {/* Footer with Settings Button */}
        <Button mt="auto" onClick={() => alert('Settings page coming soon!')}>
          🔧 Settings
        </Button>
      </Flex>
    </Box>
  );
};

export default UserBioScreen;
