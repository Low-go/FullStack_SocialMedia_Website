import React from 'react';
import { Flex, Button, Input, Text } from "@chakra-ui/react";
import { useState } from 'react';
import { AuthModalState } from '../../../../atoms/authModalAtom.js';
import { useSetRecoilState } from 'recoil';


const Login = () => {

  const setAuthModalState = useSetRecoilState(AuthModalState);  

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //on submit should connect to my mongodb!!
  const onSubmit = () => {};
  const onChange = (event) => {
    //update form state
    setLoginForm => (prev => ({
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

        <Button width='100%' height='36px' mt={2} type="submit">
            Log In
        </Button>
        <Flex fontSize="9pt" justifyContent="center">
            <Text mr={1}>Not a member?</Text>
            <Text color="blue.500"
                fontWeight={700} 
                cursor="pointer"
                onClick={() => // Added "=" here
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
