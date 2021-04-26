import React from 'react';
import styled from 'styled-components';

export interface IOnInputAnswer {
    // eslint-disable-next-line no-unused-vars
    (value: string[]): void
}

export interface IAnswerGroupProps {
    answers: string[]
    value: string[]
    onInput: IOnInputAnswer
    correctAnswers: string[] | null
}

export interface IAnswerGroup {
    // eslint-disable-next-line no-unused-vars
    (props: IAnswerGroupProps): React.ReactElement;
}

interface IAnswerTextProps {
    correct: boolean
}

export const AnswerText = styled.span`
color: ${(props: IAnswerTextProps) => (props.correct ? 'green' : 'inherit')};
`;
