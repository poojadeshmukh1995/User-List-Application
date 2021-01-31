import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { IUserList } from '../../../shared/model';
import { Labels } from '../../../shared/labels';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
   selector: 'app-user-list',
   templateUrl: './user-list.component.html',
   styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

   userList: IUserList[];
   tableHeading = Labels.userListLabels.tableHeading;
   errorMsg = Labels.commonLabels.apiErrorMsg;
   labels = Labels.userListLabels;
   isApiFailed: boolean;
   isLoader = true;

   constructor(private readonly userDataService: UserDataService) { }

   ngOnInit() {
      this.userList = [];
      // api call to fetch user list
      this.userDataService.getUserList(this.userDataService.userId).subscribe((response) => {
         if (response.data && response.data.length > 0) {
            this.userList = response.data;
            this.isLoader = false;
         } else {
            this.isLoader = false;
            this.isApiFailed = true;
         }
      }, (error: HttpErrorResponse) => {
         this.isLoader = false;
         this.isApiFailed = true;
      });
   }

}
