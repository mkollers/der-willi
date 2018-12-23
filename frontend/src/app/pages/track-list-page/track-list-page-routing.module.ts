import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeriesTitleResolver } from './resolvers/series-title-resolver';
import { TrackListResolver } from './resolvers/track-list-resolver';
import { TrackListPageComponent } from './track-list-page.component';

const routes: Routes = [
  { path: '', component: TrackListPageComponent, resolve: { tracks: TrackListResolver, title: SeriesTitleResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackListPageRoutingModule { }
