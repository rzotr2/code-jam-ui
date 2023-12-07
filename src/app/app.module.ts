import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {RequestHeadersInterceptor, AuthErrorsInterceptor} from '@common';
import {APP_CONSTANTS, CONSTANTS, AppCommonModule} from '@common';
import {BooksDataModule} from '@books-dl';
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
    MatProgressSpinnerModule,
    AppRoutingModule,
    AppCommonModule,
    UserDataModule,
    BooksDataModule
  ],
  providers: [
    { provide: APP_CONSTANTS, useValue: CONSTANTS },
    { provide: HTTP_INTERCEPTORS, useClass: RequestHeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthErrorsInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
