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
  { path: 'redirect', loadChildren: './pages/auth/redirect-page/redirect-page.module#RedirectPageModule' },
  { path: '**', redirectTo: 'trackmania' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
