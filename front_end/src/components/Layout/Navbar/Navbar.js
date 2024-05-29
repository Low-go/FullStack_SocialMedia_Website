import { Flex, Image } from '@chakra-ui/react';
import React from 'react'
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <Flex bg="white" height='44px' padding="6px 12px">
      <Flex align="center">
        <Image src="/images/Postme.jpg" height="30px"/>
        <Image src='/images/PostMe.png' heigth="46px" display={{base: 'none', md: "unset"}}/>
      </Flex>
      { <SearchInput />
      /* <Directory />
       <RightContent /> */}
    </Flex>
  );

};

export default Navbar
