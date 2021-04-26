import React from 'react';
import { IQuestion, IAnswer } from '../../store/state';
import Question from '../Question/Question';
import QuestionResultsProvider from './QuestionResultsProvider/QuestionResultsProvider';
import QuestionResult from './QuestionResultsProvider/QuestionResult';
import ResultsInfo from './ResultsInfo';

export interface IQuestionnaireData {
  questions: IQuestion[]
  answers: IAnswer[]
}

export default function Results(props: IQuestionnaireData) {
  const { questions, answers } = props;
  const resultsProvider = new QuestionResultsProvider({ questions, answers });
  return (
    <div>
      <ResultsInfo resultProvider={resultsProvider} />
      { resultsProvider.results.map((result: QuestionResult) => (
        <Question
          key={result.question.question}
          question={result.question}
          selectedAnswers={result.answer.value}
          correctAnswers={[result.question.correct_answer]}
          isCorrect={result.result}
          onSelected={() => {}}
        />
      )) }
    </div>
  );
}
