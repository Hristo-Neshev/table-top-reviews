import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/review/review.service';

@Component({
  selector: 'app-my-rewiews',
  templateUrl: './my-rewiews.component.html',
  styleUrls: ['./my-rewiews.component.css']
})
export class MyRewiewsComponent implements OnInit {
  isLoading = false;
  myReviews = null;
  httpError = null;
  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.reviewService.getReviewsByCreator().subscribe(response => {
      this.myReviews = response;
      this.isLoading = false;
    },
      error => {
        console.log(error);
      })
  }

  onDelete(id) {
    this.reviewService.deleteReview(id).subscribe(response => {
      console.log(response);
      this.router.navigate(['user/myReviews']);
    },
    error => {
      console.log(error);
      this.httpError = 'Error has occurred!'
    })
  }

}
