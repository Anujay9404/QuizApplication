import { Component, OnInit } from '@angular/core';
import { Question } from '../data/question';
import { QuizConfig } from '../data/quizConfg';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  ngOnInit(): void {
  }

}
