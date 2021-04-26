import { Difficulty, IQuestion } from '../../../store/state';
import QuestionResult from './QuestionResult';
import { IQuestionnaireData } from '../Results';

export interface IInfo {
    correct: number,
    incorrect: number
}

class QuestionResultsProvider {
    public results: QuestionResult[];

    constructor(data: IQuestionnaireData) {
      const { questions, answers } = data;
      const getResult = (
        question: IQuestion,
        i: number,
      ) => new QuestionResult(question, answers[i]);

      this.results = questions
        .map(getResult)
        .sort((aResult, bResult) => {
          const { difficulty: aDifficulty } = aResult.question;
          const { difficulty: bDifficulty } = bResult.question;
          if (aDifficulty === bDifficulty) return 0;
          if (aDifficulty === 'easy') return -1;
          if (aDifficulty === 'medium' && bDifficulty !== 'easy') return -1;
          return 1;
        });
    }

    public getInfo(difficulty?: Difficulty): IInfo {
      const reducer = (info: IInfo, result: QuestionResult) => {
        const key = result.result ? 'correct' : 'incorrect';
        return { ...info, [key]: info[key] + 1 };
      };
      return this.getResults(difficulty).reduce(reducer, { correct: 0, incorrect: 0 });
    }

    public getResults(difficulty?: Difficulty) {
      if (typeof difficulty === 'undefined') {
        return this.results;
      }
      return this.results.filter(({ question }) => question.difficulty === difficulty);
    }
}

export default QuestionResultsProvider;
