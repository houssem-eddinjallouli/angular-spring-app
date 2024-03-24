import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditmyprofileComponent } from './editmyprofile/editmyprofile.component';

const routes: Routes = [
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: '', redirectTo: '/front/ut/user/myprofile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
