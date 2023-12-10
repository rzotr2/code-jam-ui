import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DataServicesModule} from "./services/data-services/data-services.module";
import {LocalStorageService} from "./services/local-storage.service";
import {APP_CONSTANTS, appConstants} from "./app-common/constants";
import {AppCommonModule} from "./app-common/app-common.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataServicesModule,
    AppCommonModule,
  ],
  exports: [ModalModule],
  bootstrap: [AppComponent],
  providers: [
    LocalStorageService,
    {provide: APP_CONSTANTS, useValue: appConstants}
  ]
})
export class AppModule { }
