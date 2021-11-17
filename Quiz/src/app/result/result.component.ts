import { Component, OnInit } from '@angular/core';
import {   Input  } from '@angular/core';  
import { QuizComponent } from 'src/app/quiz/quiz.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()
  Result!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
