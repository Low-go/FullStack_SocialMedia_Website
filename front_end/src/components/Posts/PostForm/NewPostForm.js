import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';
import TabItem from './TabItem';
import TextInputs from './TextInputs';

const formTabs = [
  {
    title: 'Post',
    icon: IoDocumentText,
  },
  {
    title: 'Image',
    icon: IoImageOutline,
  },
];

const NewPostForm = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);

  const [textInputs, setTextInputs] = useState({
    title: '',
    body: '',
  });

  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async () => {};

  const onSelectImage = () => {};

  const onTextChange = (event) => {
    const { name, value } = event.target;
    setTextInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  return (
    <Flex direction='column' bg='white' borderRadius={4} mt={2}>
      <Flex width='100%'>
        {formTabs.map((item) => (
          <TabItem 
            //key={item.title}
            item={item}
            selected={item.title === selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </Flex>
      <Flex p={4}>
        {selectedTab === "Post" && <TextInputs
          textInputs={textInputs}
          handleCreatePost={handleCreatePost}
          onChange={onTextChange}
          loading={loading}
        />}
      </Flex>
    </Flex>
  );
};

export default NewPostForm;
