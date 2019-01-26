import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedirectPageComponent } from './redirect-page.component';

const routes: Routes = [
  { path: '', component: RedirectPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedirectPageRoutingModule { }
