import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';
import TabItem from './TabItem';
import TextInputs from './TextInputs';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { authState } from '../../../atoms/authAtom';


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
  const { user, userId } = useRecoilValue(authState);
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);

  const [textInputs, setTextInputs] = useState({
    
    body: '',
  });

  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async () => {
    setLoading(true);
    try{
      const token = localStorage.getItem('token');
      if(!token){
        console.error("No token found");
        return;
      }
      

      const data = {
        author: userId,
        content: textInputs.body,
      };
  

      const response = await axios.post('http://localhost:5000/api/posts', data, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token, 
        },
      });

      if (response.status === 201){
        const post = response.data;
        console.log('Post Created', post);
      }
      else{
        console.error('Failed to create post', err.response.data);
      }

    }
    catch(err){
      console.error('Failed to create post');
    }
    finally{
      setLoading(false);
    }
  };

  const onSelectImage = () => {}; // not yet implementing

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
            key={item.title}
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
