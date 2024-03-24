import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  connecteduser!: User;
  ngOnInit(): void {
    this.userService.getUserbyemail().subscribe(
      (user: User) => {
        this.connecteduser = user;
        if(this.userService.isLoggedIn()){
          if(this.connecteduser.role=='ADMIN'){
            this.router.navigate(['back'])
          }else{
            this.router.navigate(['front'])
          }
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
        // Handle error accordingly
      }
    );
    

  }
  response!: string;
  otherresponse!: string;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.addressForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

 

  onSubmit(): void {
    if (this.addressForm.valid) {
      const userData: User = this.addressForm.value;
      this.authenticateUser(userData.email,userData.password);
    } else {
      console.log("Form is invalid");
    }

    //auth
    // if (this.addressForm.valid) {
    //   this.userService.login(this.addressForm.value).subscribe(
    //     (result) => {
    //       console.log(result);
    //       this.router.navigate(['/admin']);
    //     },
    //     (err: Error) => {
    //       alert(err.message);
    //     }
    //   );
    // }

  }

  // authenticateUser(email: string, password: string): void {
  //   this.userService.authenticate(email, password).subscribe(
  //     response => {
  //       console.log('Authentication Response:', response);
  //       // Handle response accordingly, e.g., display a message to the user.
  //     },
  //     error => {
  //       console.error('Authentication Error:', error);
  //       // Handle error accordingly, e.g., display an error message to the user.
  //       this.response = error.error;
  //       this.otherresponse= error.error.text;
  //     }
  //   );
  // }

  authenticateUser(email: string, password: string): void {
    this.userService.authenticate(email, password).subscribe(
      response => {
        console.log('Authentication Response:', response);
      },
      error => {
        console.error('Authentication Error:', error);
        // Handle error accordingly, e.g., display an error message to the user.
        this.response = error.error;
        this.otherresponse = error.error.text;
        if (this.otherresponse === 'Welcome Admin') {
          this.router.navigate(['/back']);
        } else if (this.otherresponse === 'Welcome User') {
          this.router.navigate(['/front']);
        } else {
          // Handle other responses or errors here
          console.error('Unknown response:', this.response);
        }
      }
    );
  }
}
