import { Answer } from './answer.model';

export class Question {
    questionId: string;
    text: string;
    answers: Answer[];
}
