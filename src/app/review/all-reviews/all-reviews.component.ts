import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {
  reviews = null;
  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getAllReviews().subscribe(response => {
      this.reviews = response;
      this.reviews = this.reviews.filter(review => review.public === true);
    },
    error => {
      console.log(error);
    });
  }

}
