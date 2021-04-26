import { AnyAction } from 'redux';
import { state as defaultState } from './state';
import { SET_QUESTIONS, ADD_ANSWER } from './actions';

export default function reducer(state = defaultState, action: AnyAction) {
  if (action.type === SET_QUESTIONS) {
    return {
      ...state,
      questions: action.payload,
      isLoading: false,
    };
  }
  if (action.type === ADD_ANSWER) {
    return {
      ...state,
      answers: state.answers.concat(action.payload),
    };
  }
  return state;
}
