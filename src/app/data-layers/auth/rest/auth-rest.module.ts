import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AuthRestService} from './services/auth-rest.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [AuthRestService]
})
export class AuthRestModule {
}
