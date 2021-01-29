import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { IUserList } from '../../../shared/model';
import { Labels } from '../../../shared/labels';

@Component({
   selector: 'app-user-list',
   templateUrl: './user-list.component.html',
   styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

   userList: IUserList[];
   tableHeading = Labels.userListLabels.tableHeading;
   labels = Labels.userListLabels;

   constructor(private readonly userDataService: UserDataService) { }

   ngOnInit() {
      this.userList = [];
      this.userDataService.getUserList().subscribe((response) => {
         this.userList = response.data;
         console.log(this.userList);
      });
   }

}
