import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      {path: 'user', loadChildren: () => import('./user/user.module').then((m)=> m.UserModule)},
      {path: 'test', loadChildren: () => import('./test/test.module').then((m)=> m.TestModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsertestbackRoutingModule { }
