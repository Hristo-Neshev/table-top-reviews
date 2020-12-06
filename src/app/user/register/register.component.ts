import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  httpError = null;
  registerForm: FormGroup;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.minLength(3)),
      'profilePictureUrl': new FormControl(null, Validators.pattern(/(http|https):\/\//)),
      'password': new FormControl(null, Validators.minLength(6)),
      'rePassword': new FormControl(null, [Validators.required, RegisterComponent.matchValues('password')])
    })
  }


  onSubmit() {
    const registerData = this.registerForm.value;
    this.userService.register(registerData).subscribe(
      response => {
      this.router.navigate(['user/login']);

    }, 
    error => {
      if(error.status == 409) {
        this.httpError = 'Username is already in use!';
      } else {
        this.httpError = 'Unknown error has occurred! Please try again!'
      }

    })
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
