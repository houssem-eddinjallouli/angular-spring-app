import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-backoffice-navbar',
  templateUrl: './backoffice-navbar.component.html',
  styleUrls: ['./backoffice-navbar.component.scss']
})
export class BackofficeNavbarComponent {
  constructor(private auth:UserService){}
  logout():void{
    this.auth.logout();
  }
}
