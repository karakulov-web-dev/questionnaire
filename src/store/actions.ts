import { AnyAction } from 'redux';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { IQuestion, IState } from './state';

export const SET_QUESTIONS = Symbol('SET_QUESTIONS');
export const ADD_ANSWER = Symbol('ADD_ANSWER');

interface ISetQuestions extends AnyAction {
    payload: IQuestion[]
}

export interface IFetchQuestions {
    (): ThunkAction<void, IState, void, ISetQuestions>
}

interface IFetchQuestionsResponse {
    results: IQuestion[]
    response_code: number
}

// eslint-disable-next-line import/prefer-default-export
export const fetchQuestions: IFetchQuestions = () => async (dispatch) => {
  const { data: { results: questions } } = await axios.get<IFetchQuestionsResponse>('https://opentdb.com/api.php?amount=5');
  dispatch({
    type: SET_QUESTIONS,
    payload: questions,
  });
};

export const addAnswer = (value: string[]) => ({
  type: ADD_ANSWER,
  payload: { value },
});
