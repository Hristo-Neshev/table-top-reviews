import { Component, DoCheck, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/review/review.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  loggedIn = null;
  recentReviews = null;
  httpError = null;
  constructor(private userService: UserService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.loggedIn;
    if(this.loggedIn) {
      this.reviewService.getAllReviews().subscribe(response => {
         this.recentReviews = response;
         this.recentReviews = this.recentReviews.filter(a => a.public == true);
         this.recentReviews = this.recentReviews.sort((a,b) => Number(b.created) - Number(a.created)).slice(0,3);
        
      }, 
      error => {
        console.log(error);
        this.httpError = 'Error has occurred!';
      })
    }
  }

  ngDoCheck(): void {
    if(this.loggedIn != this.userService.loggedIn) {
      this.loggedIn = this.userService.loggedIn;
    }
  }

}
