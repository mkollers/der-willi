import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalDataPageComponent } from './personal-data-page.component';

const routes: Routes = [
  { path: '', component: PersonalDataPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalDataPageRoutingModule { }
