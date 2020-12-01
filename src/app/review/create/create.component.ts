import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'imageUrl': new FormControl(null, Validators.pattern(/(http|https):\/\//)),
      'review-content': new FormControl(null, [Validators.minLength(100), Validators.maxLength(6000)], ),
      'public': new FormControl(null)
    })
  }


  onSubmit() {
   
    console.log(this.createForm.value);
  }






}
