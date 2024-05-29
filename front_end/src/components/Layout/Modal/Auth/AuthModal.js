import { useDisclosure, 
    Button, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader,
    ModalCloseButton, 
    ModalBody  } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil';
import { AuthModalState } from '../../../../atoms/authModalAtom.js';

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
        
        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Here is the modal
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
     )
}


export default AuthModal
