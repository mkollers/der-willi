import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackListResolver } from './resolvers/track-list-resolver';
import { TrackListPageComponent } from './track-list-page.component';

const routes: Routes = [
  { path: '', component: TrackListPageComponent, resolve: { tracks: TrackListResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackListPageRoutingModule { }
