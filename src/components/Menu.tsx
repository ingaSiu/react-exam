import { Link, useNavigate } from 'react-router-dom';

import Button from './Button';
import { LOGIN_PATH } from '../routes/const';
import { LightGrey } from '../const/styles';
import { UserContext } from '../context/UserContext';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';

const Menu = () => {
  const { isLoggedIn, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = () => {
    setUser(null);
    navigate(LOGIN_PATH);
    toast.success('Logged out succesfully');
  };
  return (
    <>
      <Wrapper>
        <NavbarLinkContainer as={Link} to={'/'}>
          <IconContainer>
            <img src={logo} alt="Black Cat" />
          </IconContainer>
          <IconText>Super Exam</IconText>
        </NavbarLinkContainer>

        {isLoggedIn && (
          <NavbarLinkContainer>
            <NavbarLink to={'/'}>HOME</NavbarLink>
            <NavbarLink to={'/add'}>ADD</NavbarLink>
            <BtnWrapper>
              <Button onClick={logOut} title="Logout" />
            </BtnWrapper>
          </NavbarLinkContainer>
        )}

        {!isLoggedIn && (
          <NavbarLinkContainer>
            <NavbarLink to={'/register'}>REGISTER</NavbarLink>
            <NavbarLink to={'/login'}>LOGIN</NavbarLink>
          </NavbarLinkContainer>
        )}
      </Wrapper>
    </>
  );
};

export default Menu;

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 1px solid ${LightGrey};
  border-bottom: 1px solid ${LightGrey};
  justify-content: space-around;
  margin-top: 10px;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  text-decoration: none;
  color: black;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  text-transform: uppercase;
  color: black;
  font-size: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  width: 80px;

  img {
    width: 100%;
  }
`;

const IconText = styled.p`
  font-size: 20px;
`;

const BtnWrapper = styled.div`
  margin-bottom: 15px;
  margin-left: 25px;
`;
