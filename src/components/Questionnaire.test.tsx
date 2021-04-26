import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { Questionnaire } from './Questionnaire';

test('Questionnaire render loading', () => {
  const { container } = render(
    <Questionnaire
      questions={[]}
      answers={[]}
      isLoading
      fetchQuestions={() => {}}
      addAnswer={() => {}}
    />,
  );
  expect(getByTestId(container, 'loading'));
});
