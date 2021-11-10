import { Component, OnInit } from '@angular/core';
import { Question } from '../data/question';
import { Quiz } from '../data/quiz';
import { QuizConfig } from '../data/quizConfg';
import { Router } from '@angular/router';
import { QuizService } from '../_services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizes!: any[];
  
  questions : Array<Question> =[]
  quiz!: Quiz;
  mode = 'quiz';
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
  constructor(private route: ActivatedRoute,private quizService: QuizService,private router: Router,) { }

  ngOnInit(): void {
    

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.quizService.getAllQuiz()
    .subscribe((res: any) => {
      console.log(res);
      this.quizes = res;
     
    });

  }

  // loadQuiz(quizName: string) {
  //   this.quizService.get(quizName).subscribe((res: any) => {
  //     this.quiz = new Quiz(res);
  //     this.pager.count = this.quiz.questions.length;
  //   });
  //   this.mode = 'quiz';
  // }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }
//while answering
  onSelect(question: Question) {
    
    
      // question.choices.forEach((x) => { if (x !== x[question.CorrectAns]) x.selected = false; });
  

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
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
    return question.choices.every(x => x[question.CorrectAns] ) ? 'correct' : 'wrong';
  };

  onSubmit() {
    // let answers = [];
    // this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id,'questionId':x.id, 'answered': x.answered }));
    this.router.navigate(['/result']);
    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    
    
  }

}
