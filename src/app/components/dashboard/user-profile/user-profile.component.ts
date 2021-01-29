import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { IUserList } from '../../../shared/model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
   userProfile: IUserList;
  constructor(private readonly userDataService: UserDataService) { }

  ngOnInit() {
   this.userDataService.getUserProfile().subscribe((response) => {
      this.userProfile = response.data;
      console.log(this.userProfile);
   });
}

}
