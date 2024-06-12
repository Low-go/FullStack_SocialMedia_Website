import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box } from '@chakra-ui/react';
import {React, useEffect} from 'react';
import { useRecoilState,useSetRecoilState, useRecoilValue } from 'recoil';
import { AuthModalState } from '../../../../atoms/authModalAtom.js';
import AuthInputs from './AuthInputs.js';
import { Flex } from '@chakra-ui/react';
import { authState } from '../../../../atoms/authAtom.js';


const AuthModal = () => {
    const [modalState, setModalState] = useRecoilState(AuthModalState);
    const { isAuthenticated } = useRecoilValue(authState);
    const setAuthState = useSetRecoilState(authState);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If there's a token in localStorage, the user is authenticated
      setAuthState(prev => ({
        ...prev,
        isAuthenticated: true,
      }));
      // Keep the modal closed
      setModalState(prev => ({
        ...prev,
        open: false,
      }));
    }
  }, []);


    const handleClose = () => {
      if (isAuthenticated){
        setModalState(prev => ({
           ...prev,
           open: false, 
        }));
      }
    };

    return (
      <>
        {modalState.open && (
          <Box 
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="rgba(0, 0, 0, 0.5)"
            backdropFilter="blur(5px)"
            zIndex="overlay"
          />
        )}
        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign='center'>
              {modalState.view === 'login' && 'Login'}
              {modalState.view === 'signup' && 'Sign Up'}
              {modalState.view === 'resetPassword' && 'Reset Password'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display='flex' 
              flexDirection='column' 
              alignItems='center' 
              justifyContent='center'
              pb={6}>
                
                <Flex direction='column' 
                  align='center' 
                  justify='center'
                  width="70%"
                >
                  <AuthInputs />
                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AuthModal
