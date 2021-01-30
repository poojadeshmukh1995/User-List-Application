import { Component, OnInit } from '@angular/core';
import { Labels } from '../../../shared/labels';

@Component({
   selector: 'app-setting',
   templateUrl: './setting.component.html',
   styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
   labels = Labels.commonLabels;
   constructor() { }

   ngOnInit() {
   }

}
