import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackPageComponent } from './track-page.component';
import { LapTimeResolver } from './resolvers/lap-time-resolver';

const routes: Routes = [
  { path: '', component: TrackPageComponent, resolve: { lapTimes: LapTimeResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackPageRoutingModule { }
