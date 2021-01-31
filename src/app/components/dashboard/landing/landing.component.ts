import { Component, OnInit } from '@angular/core';
import { Labels } from '../../../shared/labels';

@Component({
   selector: 'app-landing',
   templateUrl: './landing.component.html',
   styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
   navBarLabels = Labels.navbarLabels.navBarLabelsArray;
   constructor() { }

   ngOnInit() {
   }

}
