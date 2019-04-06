import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'trackmania', canActivate: [AuthGuard], children: [
      { path: 'ranking', loadChildren: './pages/trackmania/ranking-page/ranking-page.module#RankingPageModule' },
      { path: 'series', loadChildren: './pages/trackmania/series-list-page/series-list-page.module#SeriesListPageModule' },
      { path: '**', redirectTo: 'ranking' }
    ]
  },
  {
    path: 'error', children: [
      { path: 'forbidden', loadChildren: './pages/auth/forbidden-page/forbidden-page.module#ForbiddenPageModule' }
    ]
  },
  { path: 'login', loadChildren: './pages/auth/login-page/login-page.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register-page/register-page.module#RegisterPageModule' },
  { path: '**', redirectTo: 'trackmania' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
