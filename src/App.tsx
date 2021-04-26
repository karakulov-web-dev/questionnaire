import React from 'react';
import styled from 'styled-components';
import Questionnaire from './components/Questionnaire';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Questionnaire />
    </Container>
  );
}
