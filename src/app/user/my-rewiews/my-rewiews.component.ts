import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/review/review.service';

@Component({
  selector: 'app-my-rewiews',
  templateUrl: './my-rewiews.component.html',
  styleUrls: ['./my-rewiews.component.css']
})
export class MyRewiewsComponent implements OnInit {
  myReviews = null;
  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getReviewsByCreator().subscribe(response => {
      this.myReviews = response;
    },
      error => {
        console.log(error);
      })
  }

}
