import { Component, OnInit, Input } from '@angular/core';

/**
 * @example
 * <app-table [tableHeadings] = "tableHeading" [tableData] = "userList"></app-table>
 *
 * @param tableHeadings: tableHeadings  : [] - Array of table heading
 * @param tableData: Array of table data
 */

@Component({
   selector: 'app-table',
   templateUrl: './table.component.html',
   styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

   @Input() tableHeadings = [];
   @Input() tableData = [];

   constructor() { }

   ngOnInit() {
   }

}
