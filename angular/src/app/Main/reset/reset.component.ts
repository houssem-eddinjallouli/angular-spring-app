import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit{
  email!:string;
  responseMessage: string = '';
  responseerror: string = '';


  ngOnInit(): void {
   if(this.userser.isLoggedIn()){
    this.router.navigate(['signin']);
   }
      
  }
  
  constructor( private userser: UserService, private router: Router){}
  
  gogo() {
    this.resetPassword(this.email);
  }

  resetPassword(email: string) {
  this.userser.restPasswd(email).subscribe(
    response => {},
    error => {
      console.log(error); // Handle the error as needed
      this.responseerror = error.error.text;
    }
  );
}
}
