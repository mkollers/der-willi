import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeriesListPageComponent } from './series-list-page.component';

const routes: Routes = [{
  path: '', component: SeriesListPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesListPageRoutingModule { }
