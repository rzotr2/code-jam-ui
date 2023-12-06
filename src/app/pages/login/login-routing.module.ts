import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {logoutResolver} from '@common';

import {LoginComponent} from './login.component';

const routes: Routes = [
  {path: '', resolve: [logoutResolver], component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
