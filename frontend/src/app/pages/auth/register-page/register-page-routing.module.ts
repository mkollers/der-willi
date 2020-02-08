import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterPageComponent } from './register-page.component';

const routes: Routes = [
  { path: '', component: RegisterPageComponent },
  {
    path: 'personal-data',
    loadChildren: () => import('../personal-data-page/personal-data-page.module').then(m => m.PersonalDataPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPageRoutingModule { }
