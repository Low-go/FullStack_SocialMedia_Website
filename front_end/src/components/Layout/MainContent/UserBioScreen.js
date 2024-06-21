import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { jwtDecode } from 'jwt-decode';

const UserBioScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const daysOnSite = Math.floor((Date.now() - new Date(user.created_at)) / (1000 * 60 * 60 * 24));
  const timeOnSite = daysOnSite < 1 ? 'Less than a day' : `${daysOnSite} days`;

  return (
    <Box width="35%" padding="16px" border="1px solid #ccc">
      <Box display="flex" justifyContent="space-between">
        <Image src="/path/to/your/image.png" alt="User" />
        <Text>{user.username}</Text>
      </Box>
      <Text>Time on Post It: {timeOnSite}</Text>
      <Text>Bio: {user.bio || 'No bio available'}</Text>
      <Button mt="16px">🔧</Button>
    </Box>
  );
};

export default UserBioScreen;
