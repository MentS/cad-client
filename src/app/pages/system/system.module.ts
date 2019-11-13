import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from '../../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { CustComponent } from './cust/cust.component';
import { SupplyComponent } from './supply/supply.component';

@NgModule({
  declarations: [CustComponent, SupplyComponent],
  imports: [SharedModule, SystemRoutingModule, NgZorroAntdModule]
})
export class SystemModule {}
