import { Component, OnInit } from '@angular/core';
 
@Component({
selector: 'app-home',
templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
public currentUser;
constructor() {
  const userJson = localStorage.getItem('currentUser');
  this.currentUser = userJson ? JSON.parse('userJson') : '';
}
ngOnInit() {
  
}


}
