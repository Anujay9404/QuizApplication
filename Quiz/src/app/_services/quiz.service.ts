import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  // get(url: string) {
  //   return this.http.get(url);
  // }

  getAllQuiz() {
    return this.http.get('http://localhost:9011/quiz/');
  }
  // addQuestion(){
  //   return this.http.post('')
  // }

  addQuiz(quizes:any){
    return this.http.post('http://localhost:9011/quiz/',quizes);
  }
  // addOption(options:any){
  //   return this.http.post('',options);
  // }

}
