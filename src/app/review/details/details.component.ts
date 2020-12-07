import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id = null;
  currentReview = null;
  constructor(private reviewService: ReviewService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    this.reviewService.getReviewsById(this.id).subscribe(response => {
      console.log(response);
      this.currentReview = response;
    },
    error => {
      console.log(error);
    });
  }

}
