import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'ranking',
  loadChildren: './pages/ranking-page/ranking-page.module#RankingPageModule'
}, {
  path: 'series',
  loadChildren: './pages/series-list-page/series-list-page.module#SeriesListPageModule'
}, {
  path: '**', redirectTo: 'ranking'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
