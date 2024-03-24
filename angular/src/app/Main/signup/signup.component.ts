import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  response!: string;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.addressForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      c_password: [null, Validators.required],
    }, { validator: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    let password = formGroup.controls['password'].value;
    let confirmPassword = formGroup.controls['c_password'].value;
    return password === confirmPassword ? null : { passwordsNotMatching: true };
}


  onSubmit(): void {
    if (this.addressForm.valid) {
      const userData: User = this.addressForm.value;
      this.addUser(userData);
    } else {
      console.log("Form is invalid");
    }
  }

  addUser(user: User): void {
    this.userService.addSimpleUser(user).subscribe(
      response => {
        if (response === 'User added successfully') {
          console.log('User added successfully:', response);
        } else {
          console.log('Error adding user:', response);
        }
      },
      error => {
        console.log('Error adding user:', error);
        this.response = error.error.text;
      }
    );
  }
}
