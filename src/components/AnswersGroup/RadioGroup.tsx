import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { IAnswerGroup, IAnswerGroupProps, AnswerText } from './AnswerGroup';

const AnswersRadioGroup: IAnswerGroup = (props : IAnswerGroupProps) => {
  const {
    answers,
    onInput,
    value,
    correctAnswers,
  } = props;
  return (
    <RadioGroup
      value={value[0] || null}
      onChange={(event, answer) => onInput([answer])}
    >
      { answers.map((answer) => (
        <div
          key={answer}
        >
          <Radio
            value={answer}
          />
          <AnswerText
            correct={correctAnswers ? correctAnswers.includes(answer) : false}
          >
            {answer}
          </AnswerText>
        </div>
      )) }
    </RadioGroup>
  );
};

export default AnswersRadioGroup;
