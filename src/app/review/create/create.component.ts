import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private reviewService: ReviewService, private router: Router) { }
  httpError = null;

  ngOnInit(): void {
    this.createForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'imageUrl': new FormControl(null, Validators.pattern(/(http|https):\/\//)),
      'review-content': new FormControl(null, [Validators.minLength(100), Validators.maxLength(6000)], ),
      'public': new FormControl(null)
    })
  }


  onSubmit() {
   const reviewData = this.createForm.value;
    this.reviewService.create(reviewData).subscribe(response => {
      console.log(response);
      this.router.navigate(['user/myReviews']);
    }, error => {
      console.log(error);
      this.httpError = 'Error has occurred. Please try again!';
    });
  }






}
