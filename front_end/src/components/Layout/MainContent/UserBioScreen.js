import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Button, Flex } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { authState } from '../../../atoms/authAtom';
import { jwtDecode } from 'jwt-decode';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const UserBioScreen = () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setAuth({
        isAuthenticated: true,
        user: decodedToken.username,
        userId: decodedToken.userId,
      });
      setUser(decodedToken);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const daysOnSite = Math.floor((Date.now() - new Date(user.created_at)) / (1000 * 60 * 60 * 24));
  const timeOnSite = daysOnSite < 1 ? 'Less than a day' : `${daysOnSite} days`;

  return (
    <Box width="100%" maxWidth="300px" padding="16px" border="1px solid #ccc" borderRadius="8px" bg="white">
      <Flex direction="column" align="center">
        {/* First Row */}
        <Flex direction="row" align="center" width="100%" mb="8px">
          <Image boxSize="50px" src="/images/icon.jpg" alt="User" mr="8px" />
          <Text fontSize="lg" fontWeight="bold">{user.username}</Text>
        </Flex>

        {/* Second Row */}
        <Flex direction="row" justify="space-between" width="100%" mb="8px">
          <Text fontSize="md">Been a member since:</Text>
          <Text fontSize="md">{timeOnSite}</Text>
        </Flex>

        {/* Third Row */}
        <Flex direction="row" justify="space-between" width="100%" mb="8px">
          <Text fontSize="md">Bio:</Text>
          <Text fontSize="md">{user.bio || 'No bio available'}</Text>
        </Flex>

        {/* Footer with Settings Button */}
        <Button mt="16px" onClick={() => alert('Settings page coming soon!')}>🔧 Settings</Button>
      </Flex>
    </Box>
  );
};

export default UserBioScreen;
