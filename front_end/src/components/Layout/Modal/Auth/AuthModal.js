import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { AuthModalState } from '../../../../atoms/authModalAtom.js';
import AuthInputs from './AuthInputs.js';
import { Flex } from '@chakra-ui/react';

const AuthModal = () => {
    const [modalState, setModalState] = useRecoilState(AuthModalState);

    const handleClose = () => {
        setModalState(prev => ({
           ...prev,
           open: false, 
        }));
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
