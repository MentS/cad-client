import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SystemRoutingModule } from './system-routing.module';
import { CustComponent } from './cust/cust.component';

@NgModule({
  declarations: [CustComponent],
  imports: [SystemRoutingModule, NgZorroAntdModule]
})
export class SystemModule {}
