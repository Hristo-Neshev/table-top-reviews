import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  loggedIn = null;
  user = null;
  constructor(private userService: UserService) { }
  ngDoCheck(): void {
    if(this.loggedIn != this.userService.loggedIn) {
      this.loggedIn = this.userService.loggedIn;
      this.user = JSON.parse(localStorage.getItem('userData'));
    }
  }


  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedValidation();
    this.user = JSON.parse(localStorage.getItem('userData'));
  }

  onLogout(user) {
    this.userService.logout();
  }



}
