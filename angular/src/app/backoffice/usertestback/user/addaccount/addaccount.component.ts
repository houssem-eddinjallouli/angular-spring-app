import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvancedUser } from 'src/app/models/addadvenceduser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent {
  auser!: AdvancedUser;
  addressForm = this.fb.group({
    first_name: [null, Validators.required],
    last_name: [null, Validators.required],
    email: [null, Validators.email],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    ],
    role: ['DEVELOPER', Validators.required],
    phone_number: [''] // Add default value and Validators.required
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private userService: UserService,private route:Router) { }

  onSubmit(): void {
    if (this.addressForm.invalid) {
      alert('Please fill in all the required fields.');
      return;
    }
    alert('User added successfully!');
    const user: AdvancedUser = {
      first_name: this.addressForm.value.first_name || '',
      last_name: this.addressForm.value.last_name || '',
      email: this.addressForm.value.email || '',
      phone_number: this.addressForm.value.phone_number || '', // Added fallback value
      password: this.addressForm.value.password || '',
      role: this.addressForm.value.role || '', // Added fallback value
    };
    this.addUser(user);
    this.route.navigate(['/back/ut/user']).then(() => {
      // Reload the page
      location.reload();
    });
  }

  addUser(user: AdvancedUser): void {
    this.userService.addUser(user).subscribe(
      response => {
        if (response === 'User added successfully') {
          console.log('User added successfully:', response);
        } else {
          console.log('Error adding user:', response);
        }
      },
      error => {
        console.log('Error adding user:', error);
      }
    );
  }
}
