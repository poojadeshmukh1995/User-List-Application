import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import {DashboardModule} from './components/dashboard/dashboard.module';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
