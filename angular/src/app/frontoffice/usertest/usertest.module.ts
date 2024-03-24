import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsertestRoutingModule } from './usertest-routing.module';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    UserComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    UsertestRoutingModule
  ]
})
export class UsertestModule { }
