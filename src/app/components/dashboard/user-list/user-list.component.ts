import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { IUserList } from '../../../shared/model';

@Component({
   selector: 'app-user-list',
   templateUrl: './user-list.component.html',
   styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

   userList: IUserList[];
   tableHeading = ['Id', 'Email', 'First name', 'Last name'];

   constructor(private readonly userDataService: UserDataService) { }

   ngOnInit() {
      this.userList = [];
      this.userDataService.getUserList().subscribe((response) => {
         this.userList = response.data;
         console.log(this.userList);
      });
   }

}
