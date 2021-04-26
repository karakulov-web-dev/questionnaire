import React from 'react';
import styled from 'styled-components';
import Card from '../shared/Card';
import DifficultIcon from '../shared/DifficultIcon';
import QuestionResultsProvider, { IInfo } from './QuestionResultsProvider/QuestionResultsProvider';
import { Difficulty } from '../../store/state';

interface IResultsInfoProps {
    resultProvider: QuestionResultsProvider;
}

// eslint-disable-next-line no-unused-vars
const ResultRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Result = styled.p`
margin-left: 10px;
  text-align: center;
`;

const getResultInfo = (resultProvider: QuestionResultsProvider, difficulty?: Difficulty) => {
  const { correct, incorrect }: IInfo = resultProvider.getInfo(difficulty);
  const total = correct + incorrect;
  const percent = total !== 0 ? (100 / total) * correct : 100;
  return `${correct}/${total} (${Math.round(percent)}%)`;
};

const ResultsInfo = (props: IResultsInfoProps) => {
  const { resultProvider } = props;

  const getInfo = getResultInfo.bind(null, resultProvider);

  const { correct, incorrect } = resultProvider.getInfo();

  return (
    <Card isCorrect={correct >= incorrect}>
      Total:
      { getInfo() }
      <ResultRow>
        <DifficultIcon difficulty="easy" />
        <Result>{ getInfo('easy') }</Result>
      </ResultRow>
      <ResultRow>
        <DifficultIcon difficulty="medium" />
        <Result>{ getInfo('medium') }</Result>
      </ResultRow>
      <ResultRow>
        <DifficultIcon difficulty="hard" />
        <Result>{ getInfo('hard') }</Result>
      </ResultRow>
    </Card>
  );
};

export default ResultsInfo;
