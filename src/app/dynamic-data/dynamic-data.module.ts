import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDataRoutingModule } from './dynamic-data-routing.module';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';


@NgModule({
  declarations: [
    DynamicDivComponent,
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    DynamicDataRoutingModule
  ],
  exports: [
    DynamicDivComponent,
    DynamicTableComponent
  ]
})
export class DynamicDataModule { }
