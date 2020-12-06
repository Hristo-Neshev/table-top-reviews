import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


const applicationId = 'E8D3E40A-A09E-5083-FFCC-148DF1C3B000';
const restApiKey = '93CF8EBB-7C52-4EBD-8BF0-02A793C9E24C';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) { }
  
  register(registerData) {
    const newUser = { username: registerData.username, password: registerData.password, profilePictureUrl: registerData.profilePictureUrl };
    return this.http.post(`https://api.backendless.com/${applicationId}/${restApiKey}/users/register`, newUser, {
      headers: { "Content-Type": "application/json" }
    });
  }

  login(loginData) {
    const userData = { login: loginData.username, password: loginData.password };
    return this.http.post(`https://api.backendless.com/${applicationId}/${restApiKey}/users/login`, userData, {
      headers: { "Content-Type": "application/json" }
    });
  }

  logout() {
    const user =  JSON.parse(localStorage.getItem('userData'));
    if(user) {
      this.http.get(`https://api.backendless.com/${applicationId}/${restApiKey}/users/logout`, {
        headers: {
         "user-token": user['user-token']
        }
      }).subscribe(
        response => {
          console.log(response);
          localStorage.removeItem('userData');
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
    }
   
  }
  get loggedIn () {
    return this.isLoggedValidation()
  } 

  isLoggedValidation() {
    const user = JSON.parse(localStorage.getItem('userData'));
    if(user) {
      return true;
    } else {
      return false;
    }

  }

  
}
