import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import users from '../constants/user.json';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = this.fb.group({
        username: [null],
        password: [null],
      });
    
      constructor(private fb: FormBuilder, private router:Router) {}
    
      ngOnInit() {
        console.log(users);
      }
    
      onSubmit() {
        let isValid = users.filter(
          (user:any) =>
            user.username === this.loginForm.controls.username.value &&
            user.password === this.loginForm.controls.password.value
        );
        console.log('hello', isValid);
    
        if (isValid.length > 0) {
            if(isValid[0].type === "admin"){
                this.router.navigate(['/admin-dashboard'])
            }else{

                this.router.navigate(['/student-dashboard'])
            }
        } else {
          alert('Please check credential');
        }
      }

}
