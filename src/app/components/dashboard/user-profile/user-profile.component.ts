import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { IUserList } from '../../../shared/model';
import { Labels } from '../../../shared/labels';

@Component({
   selector: 'app-user-profile',
   templateUrl: './user-profile.component.html',
   styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
   userProfile: IUserList;
   labels = Labels.userProfileLabels;
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
         } else {
            alert('somethimg went wrong');
         }
      });
   }

}
