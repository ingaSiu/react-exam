import { Content } from '../types/add';
import { MainGreen } from '../const/styles';
import styled from 'styled-components';

const Card = ({ title, description }: Content) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${MainGreen};
  border-radius: 4px;
  width: 250px;
  margin-top: 15px;
`;

const CardTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  margin-bottom: 0;
`;

const CardDescription = styled.p`
  font-size: 18px;
  padding: 20px;
  text-align: center;
`;
