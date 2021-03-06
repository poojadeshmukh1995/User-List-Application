import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataService } from './user-data.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingComponent } from './setting/setting.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LandingComponent, UserListComponent, UserProfileComponent, SettingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [LandingComponent],
})
export class DashboardModule { }
