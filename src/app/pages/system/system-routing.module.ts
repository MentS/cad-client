import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustComponent } from './cust/cust.component';

const routes: Routes = [{ path: 'cust', component: CustComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
