import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassatestComponent } from './passatest/passatest.component';
import { AvailabletestsComponent } from './availabletests/availabletests.component';

const routes: Routes = [
  { path: 'passatest/:id', component: PassatestComponent },
  { path: 'availabletest', component: AvailabletestsComponent },
  { path: '', redirectTo: '/front/ut/test/availabletest', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
