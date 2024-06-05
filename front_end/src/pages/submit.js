import React from 'react';
import PageContent from '@/components/Layout/Layout/PageContent';
import { Box, Text } from '@chakra-ui/react';
import NewPostForm from '@/components/Posts/PostForm/NewPostForm';

function submit() {
  return (
    <PageContent>
        <>
          <Box p='14px 0px' borderBottom='1px solid' borderColor="white">
            <Text>Post It!</Text>
          </Box>
          <NewPostForm/>
        </>
        <>{/** About */}</>
    </PageContent>

  )
}

export default submit
