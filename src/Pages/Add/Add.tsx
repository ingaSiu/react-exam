import { useContext, useEffect } from 'react';

import AddContentForm from './AddContentForm';
import { LOGIN_PATH } from '../../routes/const';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(LOGIN_PATH);
    }
  }, [isLoggedIn]);

  return (
    <Wrapper>
      <Title>Add skill</Title>
      <AddContentForm />
    </Wrapper>
  );
};

export default Add;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 25px;
  font-size: 40px;
`;
