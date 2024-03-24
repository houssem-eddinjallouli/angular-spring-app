import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent {
  id!: number;
  user!: User;
  value = 'Clear me';

  constructor(private activatedRoute: ActivatedRoute, private uservice: UserService) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getUser();
    });
  }

  getUser(): void {
    this.uservice.getUser(this.id).subscribe(
      (response: User) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // delete(id: number): void {
  //   console.log("test");
  //   this.uservice.deleteUser(id).subscribe(
  //     () => {
  //       this.router.navigate(['/back/ut/user']).then(() => {
  //         // Reload the page
  //         location.reload();
  //       });
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  generatecard(id:number,code:string){
        this.uservice.generatecard(id,code).subscribe(() => {
          location.reload();
        });
  }
}
