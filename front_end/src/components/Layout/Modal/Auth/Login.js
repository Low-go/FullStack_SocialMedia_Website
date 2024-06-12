import React from 'react';
import { Flex, Button, Input, Text } from "@chakra-ui/react";
import { useState } from 'react';
import { AuthModalState } from '../../../../atoms/authModalAtom.js';
import { useSetRecoilState } from 'recoil';
import { authState } from '../../../../atoms/authAtom.js';



const Login = () => {

  const setAuthModalState = useSetRecoilState(AuthModalState);  
  const setAuthState = useSetRecoilState(authState);


  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  //on submit should connect to my mongodb!!
  const onSubmit = async (event) => {
    event.preventDefault();
  
    const { username, password } = loginForm;
  
    const response = await fetch('http://localhost:5000/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
        const data = await response.json();
        // Store the JWT token in localStorage
        localStorage.setItem('token', data.token);
        // Update your authState to reflect the new authentication status
        setAuthState({
          isAuthenticated: true,
          user: username,
        });
        // Update your AuthModalState to close the modal
        setAuthModalState(prev => ({
          ...prev,
          open: false,
        }));
        alert("Login successful");
        console.log("login successfyl");
    }
  };
  
  const onChange = (event) => {
    //update form state
    setLoginForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  

  return (    
    <form onSubmit={onSubmit}>
        <Input 
            required
            name="username" 
            placeholder="User Name" 
            type="text"
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
            placeholder="password"
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
            Log In
        </Button>
        <Flex fontSize="9pt" justifyContent="center">
            <Text mr={1}>Not a member?</Text>
            <Text color="blue.500"
                fontWeight={700} 
                cursor="pointer"
                onClick={() => 
                    setAuthModalState((prev) => ({
                        ...prev,
                        view: "signup",
                    }))
                }>
                Sign Up!
            </Text>
        </Flex> 
        
    </form>

  );
  
};

export default Login
