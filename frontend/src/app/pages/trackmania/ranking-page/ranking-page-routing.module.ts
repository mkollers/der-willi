import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingPageComponent } from './ranking-page.component';
import { RankingResolver } from './resolvers/ranking-resolver';

const routes: Routes = [{
  path: '', component: RankingPageComponent, resolve: { rankings: RankingResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingPageRoutingModule { }
