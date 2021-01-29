import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import {DashboardModule} from './components/dashboard/dashboard.module';
import { SettingComponent } from './components/dashboard/setting/setting.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
   {
      path: '', redirectTo: 'login', pathMatch: 'full'
   },
   {
      path: 'dashboard',
      loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
   },
   {
      path: 'login', component: UserLoginComponent
   },
   {
      path: '**', component: ErrorPageComponent // wild card route
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
