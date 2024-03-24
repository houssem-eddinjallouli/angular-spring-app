import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-frontoffice-header',
  templateUrl: './frontoffice-header.component.html',
  styleUrls: ['./frontoffice-header.component.scss'],
})
export class FrontofficeHeaderComponent implements OnInit{
constructor(private auth:UserService){}
  logout():void{
    this.auth.logout();
  }
  connecteduser!:User;
  ngOnInit(): void {
    this.auth.getUserbyemail().subscribe(
      (user: User) => {
        this.connecteduser = user;
      },
      (error) => {
        console.error('Error fetching user data:', error);
        // Handle error accordingly
      }
    );
  }
}
