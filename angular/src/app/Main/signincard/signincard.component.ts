import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signincard',
  templateUrl: './signincard.component.html',
  styleUrls: ['./signincard.component.scss']
})
export class SignincardComponent implements OnInit {
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
  userresponse!: string;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.addressForm = this.fb.group({
      barrcode: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      const userData: string = this.addressForm.get('barrcode')?.value;
      this.authenticateUser(userData);
    } else {
      console.log("Form is invalid");
    }

  }

  authenticateUser(barrcode: string): void {
    this.userService.authenticatebarrcode(barrcode).subscribe(
      response => {
        console.log('Authentication Response:', response);
        // Save token after authentication response is received
        
      },
      error => {
        console.error('Authentication Error:', error);
        this.response = error.error;
        this.otherresponse = error.error.text;
        this.savethetoken(barrcode);
      }
    );
  }

  savethetoken(barrcode: string): void {
    this.userService.barrcodetomail(barrcode).subscribe(
      response => {
        console.log('user Response:', response);
      },
      error => {
        console.log('other Response:', this.otherresponse);
        this.userresponse = error.error.text
        if (this.otherresponse === 'Welcome Admin') {
          this.userService.setToken(this.userresponse);
          this.router.navigate(['/back']);
        } else if (this.otherresponse === 'Welcome User') {
          this.userService.setToken(this.userresponse);
          this.router.navigate(['/front']);
        } else {
          // Handle other responses or errors here
          console.error('Unknown response:', this.response);
        }
      }
    );
    
  }
}
