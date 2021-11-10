import { QuizConfig } from './quizConfg';
import { Question } from './question';

export class Quiz {
   
    constructor(public id:number,public name:string, public config:QuizConfig, public questions:Array<Question>){}
}