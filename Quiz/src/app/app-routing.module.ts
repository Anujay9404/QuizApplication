import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_helper/auth.gaurd';

 
/**Componenets */
import { LoginComponent } from './login/login.component';
 import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { ResultComponent } from './result/result.component';
import { ViewComponent } from './view/view.component';


 
const routes: Routes = [
 { path: '', component: HomeComponent, canActivate: [AuthGuard] },
 {
 path: 'login',
 component: LoginComponent
 },
 {
 path: 'quiz',
 component: QuizComponent
 },
 {
     path: 'add-quiz',
     component: AddQuizComponent
     },
     {
         path: 'result',
         component: ResultComponent
         },
         {
            path: 'home',
            component: HomeComponent
            },
            {
                path: 'view',
                component: ViewComponent
                },
 { path: '**', redirectTo: '' }
 
 ];
 
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
