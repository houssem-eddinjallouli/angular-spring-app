import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';

const routes: Routes = [{ path: '', component: TestComponent, children: [
  // Optional children routes can be added here
]
},{path:'testdetails/:id',component:TestdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
