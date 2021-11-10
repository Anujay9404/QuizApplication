import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from '../data/User';
 

 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
private currentUserSubject: BehaviorSubject<User>;
public currentUser: Observable<User>;
 
constructor(private http: HttpClient) {
  const userJson = localStorage.getItem('currentUser');
  this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(userJson || '{}'));
  this.currentUser = this.currentUserSubject.asObservable();
}
 
public get currentUserValue(): User {
return this.currentUserSubject.value;
}

login(email: string, password: string){
  return this.http.post('http://localhost:9011/login/',{ email, password });
}
logout() {
// remove user data from local storage for log out
localStorage.removeItem('currentUser');
this.currentUserSubject.next(null!);
}
}
