import React from 'react';
import { Flex, Button, Input, Text } from "@chakra-ui/react";
import { useState } from 'react';
import { AuthModalState } from '../../../../atoms/authModalAtom.js';
import { useSetRecoilState } from 'recoil';



function SignUp() {

    const setAuthModalState = useSetRecoilState(AuthModalState);  

    const [SignUpForm, setSignUpForm] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    //on submit should connect to my mongodb!!
    const onSubmit = () => {};
    const onChange = (event) => {
      //update form state
      setSignUpForm => (prev => ({
          ...prev,
          [event.target.name]: event.target.value,
      }))
    };
  
    return (    
      <form onSubmit={onSubmit}>
          <Input 
              required
              name="email" 
              placeHolder="email" 
              type="email"
              mb={2}
              onChange={onChange}
              fontSize='10pt'
              _placeholder={{color: "gray.500"}}
              _hover={{
                  bg: 'white',
                  border: "1px solid",
                  borderColor: "blue.500"
              }}
              focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "blue.500"
              }}
              bg="gray.50"/>
          
          <Input 
              required
              name="password"
              placeHolder="password"
              type="password"
              mb={2}
              onChange={onChange}
              fontSize='10pt'
              _placeholder={{color: "gray.500"}}
              _hover={{
                  bg: 'white',
                  border: "1px solid",
                  borderColor: "blue.500"
              }}
              focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "blue.500"
              }}
              bg="gray.50"/>   
            
            <Input 
              required
              name="confirmPassword"
              placeHolder="confirm Password"
              type="password"
              mb={2}
              onChange={onChange}
              fontSize='10pt'
              _placeholder={{color: "gray.500"}}
              _hover={{
                  bg: 'white',
                  border: "1px solid",
                  borderColor: "blue.500"
              }}
              focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "blue.500"
              }}
              bg="gray.50"/>   
  
          <Button width='100%' height='36px' mt={2} type="submit">
              Sign Up
          </Button>
          <Flex fontSize="9pt" justifyContent="center">
              <Text mr={1}>Login if already registered.</Text>
              <Text color="blue.500"
                  fontWeight={700} 
                  cursor="pointer"
                  onClick={() => // Added "=" here
                      setAuthModalState((prev) => ({
                          ...prev,
                          view: "login",
                      }))
                  }>
                  Login!
              </Text>
          </Flex> 
          
      </form>
  );
};

export default SignUp;
