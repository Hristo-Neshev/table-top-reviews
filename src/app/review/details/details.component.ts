import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  createdAt = null;
  alreadyLiked = false;
  isLoading = false;
  httpError = null;
  id = null;
  currentReview = null;
  currentUser = null;
  isCreator = false;
  constructor(private reviewService: ReviewService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.id = this.activatedRoute.snapshot.params.id;
    this.currentUser = JSON.parse(localStorage.getItem('userData'));

    this.reviewService.getReviewsById(this.id).subscribe(response => {
      this.currentReview = response;
      this.createdAt = new Date(this.currentReview.created).toLocaleDateString();
      this.alreadyLiked =this.currentReview.likes.includes(this.currentUser.username);
      if (this.currentUser.username == this.currentReview.creator) {
        this.isCreator = true;
      }
      this.isLoading = false;
    },
      error => {
        console.log(error);
        this.httpError = 'Error has occurred!'
      });
  }

  onLike() {
    this.reviewService.onLike(this.currentReview).subscribe(response => {
      this.router.navigate([`review/allReviews`]);
    }, error => {
      console.log(error);
      this.httpError = 'Error has occurred!';
    })
  }

}
