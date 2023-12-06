import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {RequestHeadersInterceptor} from '@common';
import {APP_CONSTANTS, CONSTANTS, AppCommonModule} from '@common';
import {UserDataModule} from '@user-dl';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    AppCommonModule,
    UserDataModule,
  ],
  providers: [
    { provide: APP_CONSTANTS, useValue: CONSTANTS },
    { provide: HTTP_INTERCEPTORS, useClass: RequestHeadersInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
