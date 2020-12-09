import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {
  isLoading = false;
  reviews = null;
  httpError = null;
  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.reviewService.getAllReviews().subscribe(response => {
      this.reviews = response;
      this.reviews = this.reviews.filter(review => review.public === true);
      this.reviews = this.reviews.sort((a,b)=> Number(b.created) - Number(a.created));
      this.isLoading = false;
    },
    error => {
      console.log(error);
      this.httpError = 'Error has occurred!';
    });
  }

}
