import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic.component';
import { DepartmentComponent } from './department/department.component';
import { DepotComponent } from './depot/depot.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      { path: 'department', component: DepartmentComponent },
      { path: 'depot', component: DepotComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule {}
