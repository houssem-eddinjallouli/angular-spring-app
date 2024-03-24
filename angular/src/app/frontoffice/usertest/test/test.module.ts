import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { PassatestComponent } from './passatest/passatest.component';
import { AvailabletestsComponent } from './availabletests/availabletests.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PassatestComponent,
    AvailabletestsComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule
  ]
})
export class TestModule { }
