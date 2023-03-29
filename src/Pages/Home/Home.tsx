import { useContext, useEffect } from 'react';

import Card from '../../components/Card';
import { LOGIN_PATH } from '../../routes/const';
import Loader from '../../components/Loader';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../../hooks/home';

const Home = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { data, isLoading } = usePosts();
  const posts = data || [];

  const navigate = useNavigate();

  const showPosts = posts && posts.length > 0;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(LOGIN_PATH);
    }
  }, [isLoggedIn]);

  return (
    <>
      {showPosts && <PageTitle>All skills</PageTitle>}
      <CardsWrapper>
        {isLoading && <Loader isLoading={isLoading} />}
        {!showPosts && !isLoading && <TitleEmpty>No data</TitleEmpty>}
        {showPosts &&
          posts.map((post, index) => <Card key={index} title={post.title} description={post.description} />)}
      </CardsWrapper>
    </>
  );
};

export default Home;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 20px;
`;

const PageTitle = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
`;

const TitleEmpty = styled.h1`
  font-size: 100px;
  text-align: center;
`;
