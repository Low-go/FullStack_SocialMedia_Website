import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { AuthModalState } from '../../../../atoms/authModalAtom';
import Login from './Login';

const AuthInputs = () => {

  const modalState = useRecoilValue(AuthModalState);  
  return (

    <Flex direction='column' align='center' width='100%' mt={4}>
        {modalState.view === 'login' && <Login />}
        {/* {modalState.view === 'signup' && <SignUp/>}         */}
    </Flex>
  )
}

export default AuthInputs;
