import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-editmyprofile',
  templateUrl: './editmyprofile.component.html',
  styleUrls: ['./editmyprofile.component.scss']
})
export class EditmyprofileComponent implements OnInit {
  connecteduser!: User;
  addressForm!: FormGroup;
  ngOnInit(): void {

    this.userService.getUserbyemail().subscribe(
      (user: User) => {
        this.connecteduser = user;

        this.addressForm = this.fb.group({
          id: [this.connecteduser.id],
          first_name: [this.connecteduser.first_name, Validators.required],
          last_name: [this.connecteduser.last_name, Validators.required],
          phone_number: [this.connecteduser.phone_number],
          address: [this.connecteduser.address],
          birth_date: [this.connecteduser.birth_date],
          gender: [this.connecteduser.gender]
        });
        this.roleLista();
      },
      (error) => {
        console.error('Error fetching user data:', error);
        // Handle error accordingly
      }
    );

  }
  // user:User=this.addressForm.value;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  onSubmit(): void {
    if (this.addressForm.invalid) {
      alert('Please fill in all the required fields.');
      return; // Add return statement to prevent further execution
    }

    this.updateUser(this.addressForm.value);
    //console.log(this.addressForm.value);
  }

  updateUser(user: User): void {
    this.userService.updaetUser(user).subscribe(
      response => {
        alert('Your account was updated successfully !');
        location.reload();
      },
      error => {
        alert('Your account was updated successfully !');
        location.reload();

      }
    );
  }





  //gender
  genderList: string[] = [];

roleLista() {
  this.userService.getGenders().subscribe(
    (response: string[]) => {
      this.genderList = response;
    },
    (error) => {
      console.error('Error fetching roles:', error);
    }
  );
}
}