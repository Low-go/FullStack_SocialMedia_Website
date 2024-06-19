import { Button, Image} from '@chakra-ui/react';
import React from 'react';
import { AuthModalState } from '../../../../atoms/authModalAtom.js';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {  authState } from '../../../../atoms/authAtom.js';

const AuthButtons = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const auth = useRecoilValue(authState);
  const setAuthState = useSetRecoilState(authState);


  //removes token from local storage; hopefully this will sign use out
  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthState(prev => ({
      ...prev,
      isAuthenticated: false,
    }));
    alert('You have signed out.');
  };

  return (
    <>
      {!auth.isAuthenticated ? (
        <>
          <Button 
            variant="outline" 
            height="28px" 
            display={{base: "none", sm: "flex"}}
            width={{ base: "70px", md: "110px"}}
            mr={2}
            onClick={() => setAuthModalState({ open: true, view: "login"})}
          >
            Log In
          </Button>
          <Button
            height="28px"
            display={{base: "none", sm: "flex"}}
            width={{ base: "70px", md: "110px"}}
            mr={2}
            onClick={() => setAuthModalState({ open: true, view: "signup"})}
          >
            Sign Up
          </Button>
        </>
      ) : (
        <>
          <Image 
            src="/images/icon.jpg" 
            height="28px"
            width="28px"
            display={{base: "none", sm: "flex"}}
            mr={2}
            borderRadius="full"
          />
          <Button
            height="28px"
            display={{base: "none", sm: "flex"}}
            width={{ base: "70px", md: "110px"}}
            mr={2}
            onClick={handleLogout}
          >
            Sign Out
          </Button>
        </>
      )}
    </>
  );
}

export default AuthButtons;
