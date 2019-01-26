import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'trackmania', children: [
      { path: 'ranking', loadChildren: './pages/trackmania/ranking-page/ranking-page.module#RankingPageModule' },
      { path: 'series', loadChildren: './pages/trackmania/series-list-page/series-list-page.module#SeriesListPageModule' },
      { path: '**', redirectTo: 'ranking' }
    ]
  },
  { path: 'redirect', loadChildren: './pages/auth/redirect-page/redirect-page.module#RedirectPageModule' },
  { path: '**', redirectTo: 'trackmania' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
