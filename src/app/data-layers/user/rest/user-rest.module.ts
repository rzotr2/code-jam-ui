import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {UserRestService} from './services/user-rest.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [UserRestService],
})
export class UserRestModule { }
