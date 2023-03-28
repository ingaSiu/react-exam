import React, { useContext, useEffect } from 'react';

import { HOME_PATH } from '../../routes/const';
import RegisterForm from './RegisterForm';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(HOME_PATH);
    }
  }, [isLoggedIn]);
  return (
    <Wrapper>
      <Title>Register here! </Title>
      <RegisterForm />
    </Wrapper>
  );
};

export default Register;

const Title = styled.h1`
  font-size: 40px;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
