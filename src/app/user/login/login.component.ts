import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  httpError = null;
  loginForm: FormGroup;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    const loginData = this.loginForm.value;
    this.userService.login(loginData).subscribe(
      response => {
        const loggedUser = response;
        localStorage.setItem('userData', JSON.stringify(loggedUser));
        this.router.navigate(['/']);
      },
      error => {
        if(error.status == 401) {
          this.httpError = 'Wrong username or password!';
        } else {
          this.httpError = 'Unknown error has occurred! Please try again!'
        }
       });
  }

}
