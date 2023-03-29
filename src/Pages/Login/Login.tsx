import React, { useContext, useEffect } from 'react';

import { HOME_PATH } from '../../routes/const';
import LoginForm from './LoginForm';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(HOME_PATH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    !isLoggedIn && (
      <Wrapper>
        <Title>Login here!</Title>
        <LoginForm />
      </Wrapper>
    )
  );
};

export default Login;

const Title = styled.h1`
  font-size: 40px;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
