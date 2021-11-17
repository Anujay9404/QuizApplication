
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { ToastrService } from 'ngx-toastr';

 
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm!: FormGroup; 
   loading = false;
   submitted = false;
   returnUrl!: string;
 
constructor(
private formBuilder: FormBuilder,
private route: ActivatedRoute,
private router: Router,
private authenticationService : AuthenticationService,
private toastr: ToastrService
) { }
 
ngOnInit() {
this.loginForm = this.formBuilder.group({
email: ['', Validators.required],
password: ['', Validators.required]
});
 
}
 
// for accessing to form fields
get fval() { return this.loginForm.controls; }
 
onFormSubmit() {
this.submitted = true;
if (this.loginForm.invalid) {
return;
}
 
this.loading = true;
this.authenticationService.login(this.fval.email.value, this.fval.password.value)
.subscribe(
  (_res: any) => {
    //  alert('Logged In successfully!');
this.router.navigate(['/view']);
},
  (error: { error: { message: any; }; }) => {
this.toastr.error(error.error.message, 'Error');
this.loading = false;
});
}
}
