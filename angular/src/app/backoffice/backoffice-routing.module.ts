import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { BlankPageComponent } from './blank-page/blank-page.component';



const routes: Routes = [
  {
    path: '', component: BackofficeComponent, children: [
      { path: 'dashboard', component: BlankPageComponent },
      {path: 'ut', loadChildren: () => import('./usertestback/usertestback.module').then((m)=> m.UsertestbackModule)},
      { path: '', redirectTo: '/back/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
