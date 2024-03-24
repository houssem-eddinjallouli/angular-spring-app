import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserslistComponent } from './userslist/userslist.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  { path: 'add', component: AddaccountComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'details/:id', component: UserdetailsComponent },
  { path: '', redirectTo: '/back/ut/user', pathMatch: 'full' }, 
  { path: '', component: UserslistComponent, children: [
      // Optional children routes can be added here
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
