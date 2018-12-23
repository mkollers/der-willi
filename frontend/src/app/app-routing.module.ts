import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'ranking',
  loadChildren: './pages/ranking-page/ranking-page.module#RankingPageModule'
}, {
  path: '**', redirectTo: 'ranking'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
