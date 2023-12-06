import {NgModule} from '@angular/core';

import {UserRestModule} from '../rest/user-rest.module';
import {UserDataService} from './services/user-data.service';

@NgModule({
    imports: [
        UserRestModule,
    ],
    providers: [
        UserDataService
    ],
})
export class UserDataModule {
}
