import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';

const Menu = () => {
  return (
    <>
      <Wrapper>
        <NavbarLinkContainer as={Link} to={'/'}>
          <IconContainer>
            <img src={logo} alt="Black Cat" />
          </IconContainer>
          <IconText>Super Exam</IconText>
        </NavbarLinkContainer>

        <NavbarLinkContainer>
          <NavbarLink to={'/'}>HOME</NavbarLink>
          <NavbarLink to={'/add'}>ADD</NavbarLink>
        </NavbarLinkContainer>

        <NavbarLinkContainer>
          <NavbarLink to={'/register'}>REGISTER</NavbarLink>
          <NavbarLink to={'/login'}>LOGIN</NavbarLink>
        </NavbarLinkContainer>

        {/* {!isLoggenIn && <TestComponent />}
        {isLoggedIn && (
          <ButtonLink to={'/'} onClick={onClick}>
            <ButtonStyle>Logout</ButtonStyle>
          </ButtonLink>
        )} */}
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
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-around;
  margin-top: 10px;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  text-decoration: none;
  color: black;
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
