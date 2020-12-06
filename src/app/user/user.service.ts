import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const applicationId = 'E8D3E40A-A09E-5083-FFCC-148DF1C3B000';
const restApiKey = '93CF8EBB-7C52-4EBD-8BF0-02A793C9E24C';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  register(registerData) {
   const newUser = {username: registerData.username, password: registerData.password, profilePictureUrl: registerData.profilePictureUrl};
   return this.http.post(`https://api.backendless.com/${applicationId}/${restApiKey}/users/register`,newUser, {
    headers: {"Content-Type":"application/json"}
   });
  }
}
