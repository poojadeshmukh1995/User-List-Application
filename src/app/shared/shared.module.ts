import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadErrorComponent } from './components/load-error/load-error.component';

@NgModule({
  declarations: [TableComponent, LoaderComponent, LoadErrorComponent],
  imports: [CommonModule],
  exports: [TableComponent, LoaderComponent, LoadErrorComponent]
})
export class SharedModule { }
