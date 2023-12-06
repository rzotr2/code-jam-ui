import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {authGuard, userDataResolver} from '@common';

const routes: Routes = [
  {
    path: '',
    resolve: [userDataResolver],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'me',
        canActivate: [authGuard],
        loadChildren: () => import('./pages/my-profile/my-profile.module').then(m => m.MyProfileModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule)
      },
      {
        path: 'book/:id',
        loadChildren: () => import('./pages/book/book.module').then(m => m.BookModule)
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
