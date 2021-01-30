import { Component, OnInit } from '@angular/core';
import { Labels } from '../../shared/labels';

@Component({
   selector: 'app-error-page',
   templateUrl: './error-page.component.html',
   styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
   labels = Labels.commonLabels;
   constructor() { }

   ngOnInit() {
   }

}
