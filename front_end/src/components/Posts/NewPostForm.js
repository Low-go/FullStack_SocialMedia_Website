import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { BsLink45Deg, BsIncognito } from 'react-icons/bs';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';
import TabItem from './TabItem';
import TextInputs from './PostForm/TextInputs';


const formTabs = [
    {
        title: 'Post',
        icon: IoDocumentText
    },
    {
        title: 'Image',
        icon: IoImageOutline
    }
];


const NewPostForm = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);

  const [textInputs, settextInputs] = useState({
    title: "",
    body: "",
  });
  const [selectedFile, setSelectedFile] = useState();

  const handleCreatePost = async () => {};

  const onSelectImage = () => {};

  const onTextChange = () => {};

  return (
    <Flex direction='column' bg='white' borderRadius={4} nt={2}>
        <Flex width='100%'>
            {formTabs.map((item) => (
                <TabItem item={item} selected={item.title === selectedTab} setSelectedTab={setSelectedTab} ></TabItem>
            ))}
        </Flex>
        <Flex p={4}>
            <TextInputs />
        </Flex>
    </Flex>
  );
};

export default NewPostForm
