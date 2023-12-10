import { NgModule } from '@angular/core';

import {AuthRestService} from "./auth-rest.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  providers: [
    AuthRestService,
    HttpClientModule
  ]
})
export class AuthRestModule { }
