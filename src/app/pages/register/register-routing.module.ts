import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {logoutResolver} from '@common';

import {RegisterComponent} from './register.component';

const routes: Routes = [
  {path: '', resolve: [logoutResolver], component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {
}
