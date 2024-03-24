import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verif',
  templateUrl: './verif.component.html',
  styleUrls: ['./verif.component.scss']
})
export class VerifComponent implements OnInit{
constructor(private userservice: UserService){}
ngOnInit(): void {
  
}
v1!:string;
v2!:string;
v3!:string;
v4!:string;
v5!:string;
v6!:string;
S!:string;
responseok!:string;
responseno!:string;


verifieremail(){
  this.S=this.v1+this.v2+this.v3+this.v4+this.v5+this.v6;
  console.log(this.v1);
  this.verify(this.S);
}
verify(code:string) {
  this.userservice.verifyaccount(code).subscribe(
    (response: string) => {
      this.responseok = response;
      console.log(this.responseok);
    },
    (error) => {
      console.error('Error fetching roles:', error);
      this.responseno = error;
      console.log(this.responseno);
    }
  );
}
}