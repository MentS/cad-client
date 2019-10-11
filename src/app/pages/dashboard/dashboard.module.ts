import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { MonitorComponent } from './monitor/monitor.component';

@NgModule({
  declarations: [MonitorComponent],
  imports: [DashboardRoutingModule],
  exports: [MonitorComponent]
})
export class DashboardModule {}
