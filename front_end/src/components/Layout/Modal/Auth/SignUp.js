import React from 'react';
import { Flex, Button, Input, Text } from "@chakra-ui/react";
import { useState } from 'react';
import { AuthModalState } from '../../../../atoms/authModalAtom.js';
import { useSetRecoilState } from 'recoil';

function SignUp() {

    const setAuthModalState = useSetRecoilState(AuthModalState);  

    const [SignUpForm, setSignUpForm] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const onSubmit = async (event) => {
        event.preventDefault();
      
        const { username, email, password, confirmPassword } = SignUpForm;
      
        // Perform validation here
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
      
        const response = await fetch('http://localhost:5000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
      
        if (response.ok) {
          // Reset form state
          setSignUpForm({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
      
          // Redirect to login
          setAuthModalState(prev => ({
            ...prev,
            view: "login",
          }));
      
          alert("Signup successful");
        } else {
          // Handle error
          const errorData = await response.json();
          alert(`Signup failed: ${errorData.message}`);
        }
      };
      

    const onChange = (event) => {
      setSignUpForm(prev => ({
          ...prev,
          [event.target.name]: event.target.value,
      }));
    };
  
    return (    
      <form onSubmit={onSubmit}>
          <Input 
              required
              name="username" 
              placeHolder="username" 
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
                  onClick={() =>
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
