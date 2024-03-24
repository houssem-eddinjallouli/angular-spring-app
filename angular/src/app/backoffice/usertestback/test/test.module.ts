import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { ImportquizComponent } from './importquiz/importquiz.component';
import { GeneratequizComponent } from './generatequiz/generatequiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestdetailsComponent } from './testdetails/testdetails.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [TestComponent, ImportquizComponent, GeneratequizComponent, TestdetailsComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class TestModule { }
