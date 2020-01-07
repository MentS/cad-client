import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// # http interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from './http/default.interceptor';
const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];

import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { BasicModule } from './pages/basic/basic.module';
import { SystemModule } from './pages/system/system.module';
import { LoginComponent } from './login/login.component';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, LayoutComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    BasicModule,
    SystemModule
  ],
  providers: [...INTERCEPTOR_PROVIDES, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
