import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'trackmania', children: [{
    path: 'ranking',
    loadChildren: './pages/trackmania/ranking-page/ranking-page.module#RankingPageModule'
  }, {
    path: 'series',
    loadChildren: './pages/trackmania/series-list-page/series-list-page.module#SeriesListPageModule'
  }, {
    path: '**', redirectTo: 'ranking'
  }]
}, {
  path: '**', redirectTo: 'trackmania'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
