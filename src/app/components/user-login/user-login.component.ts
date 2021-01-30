import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labels } from '../../shared/labels';
import { UserDataService } from '../dashboard/user-data.service';
import { NgForm } from '@angular/forms';

@Component({
   selector: 'app-user-login',
   templateUrl: './user-login.component.html',
   styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
   labels = Labels.userLoginLabels;
   constructor(private readonly router: Router, private readonly userDataService: UserDataService) { }

   ngOnInit() {
   }
   onLoggedIn(event: NgForm) {
      this.userDataService.userId = event.value.id;
      this.router.navigateByUrl('/dashboard');

   }

}
