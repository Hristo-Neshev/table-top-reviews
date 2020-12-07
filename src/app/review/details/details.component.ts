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
  currentUser = null;
  isCreator = false;
  constructor(private reviewService: ReviewService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.currentUser = JSON.parse(localStorage.getItem('userData'));

    this.reviewService.getReviewsById(this.id).subscribe(response => {
      this.currentReview = response;

      if (this.currentUser.username == this.currentReview.creator) {
        this.isCreator = true;
      }
    },
      error => {
        console.log(error);
      });
  }

}
