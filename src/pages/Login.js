import React from 'react';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import styled from 'styled-components';

const Container = styled.div``
const Login = () => {
  return (
    <Container>
      <AmplifySignOut/>
    </Container>
  );
}

export default withAuthenticator(Login) ;
