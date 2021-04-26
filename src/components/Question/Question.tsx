import React from 'react';
import styled from 'styled-components';
import { IAnswerGroup, IOnInputAnswer } from '../AnswersGroup/AnswerGroup';
import { IQuestion } from '../../store/state';
import RadioGroup from '../AnswersGroup/RadioGroup';
import CheckboxesGroup from '../AnswersGroup/CheckboxesGroup';
import QuestionCard from '../shared/Card';
import DifficultIcon from '../shared/DifficultIcon';

interface IQuestionProps {
    question: IQuestion,
    onSelected: IOnInputAnswer
    selectedAnswers: string[]
    correctAnswers: string[] | null
    isCorrect: boolean | null
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ControlPanel = styled.div`
  width: 100%;
`;

const QuestionText = styled.p`
  text-align: center;
`;

export default function Question(props: IQuestionProps) {
  const {
    question,
    onSelected,
    selectedAnswers,
    correctAnswers,
    isCorrect,
  } = props;
  const AnswerGroup: IAnswerGroup = question.type === 'multiple' ? CheckboxesGroup : RadioGroup;
  const answers = question.incorrect_answers.concat(question.correct_answer).sort();

  return (
    <QuestionCard
      isCorrect={isCorrect}
    >
      <Content>
        <DifficultIcon difficulty={question.difficulty} />
        <QuestionText>{question.question}</QuestionText>
      </Content>
      <ControlPanel>
        <AnswerGroup
          answers={answers}
          correctAnswers={correctAnswers}
          value={selectedAnswers}
          onInput={onSelected}
        />
      </ControlPanel>
    </QuestionCard>
  );
}
