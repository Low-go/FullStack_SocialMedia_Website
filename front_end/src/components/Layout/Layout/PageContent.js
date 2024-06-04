import React from 'react';
import { Flex } from '@chakra-ui/react';

const PageContent = ({ children }) => {
  return ( // first flex is the entirety of the page. The nxt is the innermost, the last two are side by side columns
    <Flex justify='center' padding='16px 8px' > 
        <Flex width='95%' 
        maxWidth='860px' 
        justify='center'>

            {/** LFS */}
            <Flex direction= 'column' 
                width={{ base: '100%', md: '65%'}}
                mr = {{ base: 0, md: 6}}
                >
                {children[0]}
            </Flex>
                
            {/** RHS */}
            <Flex direction = 'column' 
                display = {{ base: 'none', md: "flex"}}
                flexgrow = {1}
                
                >
                {children[1]}
            </Flex>

        </Flex>
    </Flex>
  );
};

export default PageContent
