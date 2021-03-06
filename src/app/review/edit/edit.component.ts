import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isLoading = false;
  httpError = null;
  editForm: FormGroup;
  id = null;
  currentReview = null;
  
  constructor(private reviewService: ReviewService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.editForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'imageUrl': new FormControl(null, Validators.pattern(/(http|https):\/\//)),
      'review-content': new FormControl(null, [Validators.minLength(100), Validators.maxLength(6000)], ),
      'public': new FormControl(null)
    });

    this.id = this.activatedRoute.snapshot.params.id;
    
    this.reviewService.getReviewsById(this.id).subscribe(response => {
      this.currentReview = response;
      this.editForm.setValue({
        'title': this.currentReview.title,
         'imageUrl': this.currentReview.imageUrl,
          'review-content': this.currentReview.content,
          'public': this.currentReview.public
        });
        this.isLoading = false;
    },
      error => {
        console.log(error);
        this.httpError = 'Error has occurred!'
      });

  }

  onSubmit() {
   this.reviewService.edit(this.id, this.editForm.value).subscribe(response => {
    console.log(response);
    this.router.navigate([`user/myReviews`])
   }, error => {
    console.log(error);
   })
    
  }

}
