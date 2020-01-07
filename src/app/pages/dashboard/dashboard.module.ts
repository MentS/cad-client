import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { MonitorComponent } from './monitor/monitor.component';

@NgModule({
  declarations: [MonitorComponent],
  imports: [DashboardRoutingModule, NgZorroAntdModule],
  exports: [MonitorComponent]
})
export class DashboardModule {}
