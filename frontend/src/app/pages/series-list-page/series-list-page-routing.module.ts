import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeriesListPageComponent } from './series-list-page.component';

const routes: Routes = [
  { path: '', component: SeriesListPageComponent },
  { path: ':seriesId', loadChildren: () => import('../trackmania/track-list-page/track-list-page.module').then(m => m.TrackListPageModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesListPageRoutingModule { }
