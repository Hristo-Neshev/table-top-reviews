import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'imageUrl': new FormControl(null, Validators.pattern(/(http|https):\/\//)),
      'review-content': new FormControl(null, [Validators.minLength(100), Validators.maxLength(6000)], ),
      'public': new FormControl(null)
    })
  }

  onSubmit() {
   
    console.log(this.editForm.value);
  }

}
