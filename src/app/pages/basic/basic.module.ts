import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { BasicRoutingModule } from './basic-routing.module';
import { DepartmentComponent } from './department/department.component';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic.component';
import { DepotComponent } from './depot/depot.component';

@NgModule({
  declarations: [DepartmentComponent, BasicComponent, DepotComponent],
  imports: [SharedModule, BasicRoutingModule, NgZorroAntdModule],
  exports: []
})
export class BasicModule {}
