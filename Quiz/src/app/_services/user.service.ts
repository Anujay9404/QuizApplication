import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../data/User';
 
@Injectable({ providedIn: 'root' })
export class UserService {
constructor(private http: HttpClient) { }
 
login(user: User) {
return this.http.post('http://localhost:9011/login/', user);
}
 

}