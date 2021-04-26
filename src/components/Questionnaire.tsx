import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';
import Question from './Question/Question';
import Results from './Results/Results';
import { IQuestion, IAnswer, IState } from '../store/state';
import { fetchQuestions, addAnswer } from '../store/actions';

interface IQuestionnaireProps {
  questions: IQuestion[]
  answers: IAnswer[]
  isLoading: Boolean
  fetchQuestions: Function
  addAnswer: Function
}

const Questionnaire = (
  {
    questions,
    answers,
    isLoading,
    fetchQuestions: fetch,
    addAnswer: onSubmit,
  }: IQuestionnaireProps,
) => {
  const question = questions[answers.length];
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  useEffect(() => { fetch(); }, []);
  useEffect(() => { setSelectedAnswers([]); }, [question]);

  if (isLoading) {
    return <CircularProgress size={100} />;
  }

  if (questions.length === answers.length) {
    return (
      <Results
        answers={answers}
        questions={questions}
      />
    );
  }

  return (
    <div>
      <Question
        question={question}
        selectedAnswers={selectedAnswers}
        onSelected={setSelectedAnswers}
        correctAnswers={null}
        isCorrect={null}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => { onSubmit(selectedAnswers); }}
        disabled={!selectedAnswers.length}
      >
        next
      </Button>
    </div>
  );
};

const mapStateToProps = ({ questions, answers, isLoading }: IState) => ({
  questions,
  answers,
  isLoading,
});
const mapDispatchToProps = { fetchQuestions, addAnswer };

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
