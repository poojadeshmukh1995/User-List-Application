import { Component, OnInit, Input } from '@angular/core';


/**
 * @example
 * <app-load-error [errorMsg]="errorMsg"></app-load-error>
 *
 * @param errorMsg: string- error message.
 */
@Component({
  selector: 'app-load-error',
  templateUrl: './load-error.component.html',
  styleUrls: ['./load-error.component.scss']
})
export class LoadErrorComponent implements OnInit {

   @Input() errorMsg: string;
  constructor() { }

  ngOnInit() {
  }

}
