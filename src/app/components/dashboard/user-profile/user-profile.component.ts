import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { IUserList } from '../../../shared/model';
import { Labels } from '../../../shared/labels';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
   selector: 'app-user-profile',
   templateUrl: './user-profile.component.html',
   styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
   userProfile: IUserList;
   labels = Labels.userProfileLabels;
   isShowLoader = true;
   isApiFailed: boolean;
   errorMsg = Labels.commonLabels.apiErrorMsg;
   constructor(private readonly userDataService: UserDataService) { }

   ngOnInit() {
      this.userProfile = {
         id: 0,
         email: '',
         avatar: '',
         first_name: '',
         last_name: ''
      };
      // api call for single user profile
      this.userDataService.getUserProfile(this.userDataService.userId).subscribe((response) => {
         if (response.data) {
            this.userProfile = response.data;
            this.isShowLoader = false;
         } else {
            this.isShowLoader = false;
            this.isApiFailed = true;
         }
      }, (error: HttpErrorResponse) => {
         this.isShowLoader = false;
         this.isApiFailed = true;
      });
   }

}
