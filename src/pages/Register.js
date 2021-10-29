import React from 'react';
import styled from 'styled-components';
import Amplify from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react'
import confi from '../aws-exports'

Amplify.configure(confi)

const Container = styled.div``
const Register = () => {
  return (
    <Container>
       hello
    </Container>
  );
}

export default withAuthenticator(Register) ;
