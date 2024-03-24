import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-frontoffice',
  templateUrl: './frontoffice.component.html',
  styleUrls: ['./frontoffice.component.scss']
})
export class FrontofficeComponent implements OnInit {
  connecteduser!: User;
  constructor(private serv: UserService,private router: Router) { }

  ngOnInit(): void {
    this.serv.getUserbyemail().subscribe(
      (user: User) => {
        this.connecteduser = user;
        if(this.connecteduser.role=='ADMIN'){
          this.router.navigate(['/back']);
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
        // Handle error accordingly
      }
    );
  }
}
