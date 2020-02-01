import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth/guards/auth.guard';
import { PersonalDataGuard } from './shared/auth/guards/personal-data.guard';
import { NoShellComponent } from './shared/layout/components/no-shell/no-shell.component';
import { ShellComponent } from './shared/layout/components/shell/shell.component';
import { TrackmaniaReadGuard } from './shared/trackmania/guards/trackmania-read.guard';

const routes: Routes = [
  {
    path: 'trackmania', component: ShellComponent, canActivate: [AuthGuard, PersonalDataGuard],
    runGuardsAndResolvers: 'always', children: [
      {
        path: '', canActivate: [TrackmaniaReadGuard], children: [
          { path: 'ranking', loadChildren: './pages/trackmania/ranking-page/ranking-page.module#RankingPageModule' },
          { path: 'series', loadChildren: './pages/trackmania/series-list-page/series-list-page.module#SeriesListPageModule' },
          { path: '**', redirectTo: 'ranking' }
        ]
      }
    ]
  },
  {
    path: 'error', component: NoShellComponent, children: [
      { path: 'forbidden', loadChildren: './pages/auth/forbidden-page/forbidden-page.module#ForbiddenPageModule' }
    ]
  },
  { path: 'login', component: NoShellComponent, loadChildren: './pages/auth/login-page/login-page.module#LoginPageModule' },
  { path: 'signup', component: NoShellComponent, loadChildren: './pages/auth/register-page/register-page.module#RegisterPageModule' },
  { path: '**', redirectTo: 'trackmania' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
