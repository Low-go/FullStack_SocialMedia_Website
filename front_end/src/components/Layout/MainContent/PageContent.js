import React from 'react';
import { Flex } from '@chakra-ui/react';
import LeftContent from '../../../components/Layout/MainContent/LeftContent'; // Adjust the import path as needed

const PageContent = ({ children }) => {
  return (
    <Flex justify='center' padding='16px 8px'>
      <Flex width='95%' maxWidth='1100px' justify='center'>
        {/* LHS - Weather Widget */}
        <Flex direction='column' width={{ base: '100%', md: '20%' }} mr={{ base: 0, md: 4 }}>
          <LeftContent />
        </Flex>
        
        {/* Middle - Main Content */}
        <Flex direction='column' width={{ base: '100%', md: '55%' }} mr={{ base: 0, md: 4 }}>
          {children[0]}
        </Flex>
        
        {/* RHS - User Bio */}
        <Flex direction='column' display={{ base: 'none', md: 'flex' }} width={{ base: '100%', md: '25%' }} flexGrow={1}>
          {children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContent;
