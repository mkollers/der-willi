import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackListPageComponent } from './track-list-page.component';

const routes: Routes = [
  { path: '', component: TrackListPageComponent },
  { path: ':trackId', loadChildren: () => import('../trackmania/track-page/track-page.module').then(m => m.TrackPageModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackListPageRoutingModule { }
