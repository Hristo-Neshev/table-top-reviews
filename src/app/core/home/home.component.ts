import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  loggedIn = null;;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.loggedIn;
  }

  ngDoCheck(): void {
    if(this.loggedIn != this.userService.loggedIn) {
      this.loggedIn = this.userService.loggedIn;
    }
  }

}
