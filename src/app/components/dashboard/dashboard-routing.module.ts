import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
   {
      path: '', redirectTo: 'landing', pathMatch: 'full'
   },
   {
      path: 'landing', component: LandingComponent,
      children: [
         { path: '', redirectTo: 'user-list', pathMatch: 'full' },
         {
            path: 'user-list', component: UserListComponent
         },
         {
            path: 'user-profile', component: UserProfileComponent
         },
         {
            path: 'setting', component: SettingComponent
         }
      ]
   }
];
@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DashboardRoutingModule { }
