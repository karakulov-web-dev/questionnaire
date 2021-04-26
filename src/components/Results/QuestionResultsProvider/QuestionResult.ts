import { IAnswer, IQuestion } from '../../../store/state';

interface IQuestionResult {
    question: IQuestion
    answer: IAnswer
    result: boolean
}

class QuestionResult implements IQuestionResult {
    public result: boolean

    constructor(public question: IQuestion, public answer: IAnswer) {
      this.result = answer.value.length === 1 && question.correct_answer === answer.value[0];
    }
}

export default QuestionResult;
