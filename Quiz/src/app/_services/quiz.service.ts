import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Question } from '../data/question';

@Injectable()
export class QuizService {
  name!: string;

  constructor(private http: HttpClient) { }

  // get(url: string) {
  //   return this.http.get(url);
  // }

  getAllQuiz() {
    return this.http.get('http://localhost:9011/quiz/');
  }
  playQuiz(name:string){
    return this.http.get('http://localhost:9011/byname/'+ name)
  }
  // addQuestion(){
  //   return this.http.post('')
  // }
  

  addQuiz(quizes:any){
    // console.log(name);ss
    // console.log(questions);
    console.log(quizes);
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    return this.http.post('http://localhost:9011/quiz/', quizes);
    
  }
  deleteQuiz(id: number){
    return this.http.delete( 'http://localhost:9011/quiz/'+  id)
  }
  //{"name":name,"questions":[{"text":questions.text,"choices":["yh","kl","ok"],"CorrectAns":questions.CorrectAns}]},{ headers }
  // addOption(options:any){
  //   return this.http.post('',options);
  // }

}
