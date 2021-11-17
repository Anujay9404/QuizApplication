import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Question } from '../data/question';
import { QuizConfig } from '../data/quizConfg';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  name!:string;
  question!: string;
  op1!: string;
  op2!: string;
  op3!: string;
  CorrectAns!: string;
  showMessage: boolean = false;
 public Quizes:Array<any> = []
 public numberValue!: number
  
 
  constructor(private quizService: QuizService,private formBuilder : FormBuilder ) { }
  
  // addQuiz(name:string,questions:Array<Question>){
  //   // this.Quizes = this.getQuiz()
  //   this.quizService.addQuiz({name,questions})
   
  
  // }
  
 
 getQuiz(name:string,question:string,op1:string,op2:string,op3:string,CorrectAns:string){
   this.name=name;
   this.question=question
   this.op1=op1
   this.op2=op2
   this.op3=op3
   this.CorrectAns=CorrectAns
   this.numberValue = Number(this.CorrectAns);
   const que: Array<{text:string,  choices:Array<any>,CorrectAns:number}> = [
    { text: this.question, choices:[{op1,op2,op3}],CorrectAns:this.numberValue}
  ];

  console.log(name,que);
  this.quizService.addQuiz({name,que})
  .subscribe((res: any) => {
    console.log(res);
    this.showMessage = true;
  });
  
  // return que;
  }
  

  ngOnInit(): void {
  }

}
