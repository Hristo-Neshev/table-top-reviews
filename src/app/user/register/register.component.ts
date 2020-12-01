import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private password: string;
  registerForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.minLength(3)),
      'profilePictureUrl': new FormControl(null, Validators.pattern(/(http|https):\/\//)),
      'password': new FormControl(null, Validators.minLength(6)),
      'rePassword': new FormControl(null, [Validators.required, RegisterComponent.matchValues('password')])
    })
  }


  onSubmit() {
    //console.log(this.registerForm.value);
    console.log(this.registerForm.value);
  }

  public static matchValues(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
}


}
