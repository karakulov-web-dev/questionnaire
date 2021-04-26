export type Difficulty = 'easy' | 'medium' | 'hard'

export interface IQuestion {
    category: string
    type: 'multiple' | 'boolean'
    difficulty: Difficulty
    question: string,
    // eslint-disable-next-line camelcase
    correct_answer: string
    // eslint-disable-next-line camelcase
    incorrect_answers: string[]
}

export interface IAnswer {
   value: string[]
}

export interface IState {
    questions: IQuestion[],
    answers: IAnswer[]
    isLoading: boolean
}

export const state: IState = {
  questions: [],
  answers: [],
  isLoading: true,
};
