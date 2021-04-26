import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import { IAnswerGroup, IAnswerGroupProps, AnswerText } from './AnswerGroup';

const onHandleChange = (handleChange: Function, value: string[], key: string, checked: boolean) => {
  if (checked) {
    handleChange(value.concat(key));
  } else {
    handleChange(value.filter((item: string) => item !== key));
  }
};

const CheckboxesGroup: IAnswerGroup = (props: IAnswerGroupProps) => {
  const {
    answers, value, onInput, correctAnswers = [],
  } = props;
  const onChange = onHandleChange.bind(null, onInput, value);
  return (
    <div>
      {
        answers.map(
          (answer: string) => (
            <div
              key={answer}
            >
              <Checkbox
                checked={value.includes(answer)}
                onChange={(event, checked) => { onChange(answer, checked); }}
              />
              <AnswerText
                correct={correctAnswers ? correctAnswers.includes(answer) : false}
              >
                {answer}
              </AnswerText>
            </div>
          ),
        )
      }
    </div>
  );
};

export default CheckboxesGroup;
