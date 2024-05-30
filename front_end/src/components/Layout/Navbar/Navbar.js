import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';
import RightContent from './RightContent/RightContent';

const Navbar = () => {
  return (
    <Flex bg="white" height='60px' padding="6px 12px" align="center">
      <Flex align="center">
        <Image 
          src="/images/PostMeLogo2.png" 
          height="40px"   
          width="auto"    
          marginRight="12px"
          borderRadius={2} 
        />
        <Image 
          src="/images/PostMe.png" 
          height="33px" 
          display={{ base: 'none', md: 'unset' }} 
        />
      </Flex>
      <Flex
        flex="1" /* This ensures the SearchInput takes available space */
        marginLeft={{ base: '20px', lg: '0' }} /* Adds margin-left for medium screens and smaller */
      >
        <SearchInput />
        <RightContent />
      </Flex>
      {/* <Directory />
           */}
    </Flex>
  );
};

export default Navbar;
