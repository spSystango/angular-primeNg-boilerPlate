import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'',component:ListComponent, data:{'title':'Users List'}},
  {path:'list',component:ListComponent, data:{'title':'Users List'}},
  {path:'add',component:ListComponent, data:{'title':'Users List'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
