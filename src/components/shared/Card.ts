import styled from 'styled-components';

interface ICardProps {
    isCorrect: boolean | null;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  padding: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-left: ${({ isCorrect }:ICardProps) => {
    if (isCorrect === null) return 'none';
    if (isCorrect) return '2px solid green';
    return '2px solid red';
  }};
`;

export default Card;
