import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustComponent } from './cust/cust.component';
import { SupplyComponent } from './supply/supply.component';

const routes: Routes = [
  { path: 'cust', component: CustComponent },
  { path: 'supply', component: SupplyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
