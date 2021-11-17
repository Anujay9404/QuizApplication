import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../data/question';
import { Quiz } from '../data/quiz';
import { QuizConfig } from '../data/quizConfg';
import { Router } from '@angular/router';
import { QuizService } from '../_services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-quiz',

  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizes: Quiz[] =[];
  public questions : Array<Question> =[]
  quiz!: Quiz;
  mode = 'quiz';
  public score:number=0;
  public results!:number

  // itemsList: Question["choices"] =[]
  // / answerSelected = false;
  // radioSel: any;
  // radioSelected: string;
  // radioSelectedString!: string;
  // score!: number;
  // quizName!: string;
  config: QuizConfig = {
    'allowBack': true,  //to go prev question
    'allowReview': true, //to review 
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showPager': true,
    'theme': 'none'
  };
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  name!: string;

 
  constructor(private route: ActivatedRoute,private quizService: QuizService,private router: Router,
  ) { }

  
  

  ngOnInit(): void {
    

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    //  const name = this.route.snapshot.paramMap.get('name');
    //  console.log(name);
 
    this.quizService.playQuiz("Java quiz")
    .subscribe((res: any) => {
      console.log(res);
      this.quizes = res;
     
    });

  }

  


 
//while answering
  OnAnswer(index:number,correct:number) {
    if(index === correct){
    this.score++;
    console.log(this.score);
    // console.log("CorrectAns")
  }
    else{
      console.log(index)
      console.log(correct)
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }
//Evaluating
  isAnswered(question: Question) {
    return question.choices.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.choices.every(x => x[question.correctAns] ) ? 'correct' : 'wrong';
  };

  onSubmit() {
    // let answers = [];
    // this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id,'questionId':x.id, 'answered': x.answered }));
    //  this.router.navigate(['/result']);
    // Post your data to the server here. answers contains the questionId and the users' answer.
     this.results = this.score
  }

}
