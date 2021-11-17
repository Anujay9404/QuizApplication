import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../data/quiz';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-view',
 
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  showMessage: boolean = false;
  quizes: Quiz[] =[];
  constructor(private route: ActivatedRoute,private quizService: QuizService,private router: Router,) { }
  name!:string
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.quizService.getAllQuiz()
    .subscribe((res: any) => {
      console.log(res);
      // this.router.navigate(['/quiz']);
      this.quizes = res;
     
    });
  }
  quizGame(){
    this.router.navigate(['/quiz']);
  }
  
  deleteQuiz(id: number){
    this.quizService.deleteQuiz(id)
    .subscribe((res: any) => {
      console.log(res);
      // this.courses = res;
      this.showMessage = true;
    });
  }
 }
