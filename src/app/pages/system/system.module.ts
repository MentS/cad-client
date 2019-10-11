import { NgModule } from '@angular/core';

import { SystemRoutingModule } from './system-routing.module';

import { CustComponent } from './cust/cust.component';

@NgModule({
  declarations: [CustComponent],
  imports: [SystemRoutingModule]
})
export class SystemModule {}
