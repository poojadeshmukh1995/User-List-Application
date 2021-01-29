import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labels } from '../../shared/labels';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

   labels = Labels.userLoginLabels;
  constructor(private readonly router: Router) { }

  ngOnInit() {
  }
  onLoggedIn() {
     this.router.navigateByUrl('/dashboard');

  }

}
