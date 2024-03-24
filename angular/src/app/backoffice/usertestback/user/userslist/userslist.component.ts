import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit{
  emailsearch: string='.';
  isempty:boolean=this.emailsearch!==''
  selectedRole!:string;
  Rolelist:String[]=[]
  displayrole:boolean[]=[];
  newrole: string[]=[];
  cr(ii:number){
    this.displayrole[ii]=!this.displayrole[ii];
  }
  constructor(private uservice:UserService,private router: Router) { }
  ngOnInit(): void {
    this.emailsearch='';
    this.roleLista();
    this.getallusers();
    this.uservice.getUsers().subscribe(users => {
      this.users = users;
      this.displayrole = new Array(users.length).fill(true);
    });
  }

  public users!:User[];
  public getallusers(): void{
    this.uservice.getUsers().subscribe(
      (response:User[])=>{
        this.users=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

    deleteMyObject(userId: number ){
    this.uservice.deleteUser(userId).subscribe();
    }

    addu(user:User){
     // user=this.app;
     // user.name=this.newb
      this.uservice.addSimpleUser(user).subscribe();
    }
    bd(id:number){
      //user.name=this.newname;
      this.uservice.bloquage(id).subscribe(() => {
        // Update brands array after addition
        this.getallusers();
      });
    }

    modifierrole(id:number,role:string,i:number){
      //user.name=this.newname;
      this.uservice.modifierRole(id,role).subscribe(() => {
        this.displayrole[i] = true;
        this.getallusers();
      });
    }

    roleList: string[] = [];

roleLista() {
  this.uservice.getRoles().subscribe(
    (response: string[]) => {
      this.roleList = response;
    },
    (error) => {
      console.error('Error fetching roles:', error);
    }
  );
}

countUsersByRole(role: string): number {
  return this.users.filter(user => user.role === role).length;
}

}
