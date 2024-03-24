import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  constructor( private userser: UserService, private router: Router){}
ngOnInit(): void {
  if(this.userser.isLoggedIn()){
    this.router.navigate(['signin']);
   }
}
 
}
