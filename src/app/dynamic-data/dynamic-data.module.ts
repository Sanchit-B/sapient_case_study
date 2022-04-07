import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDataRoutingModule } from './dynamic-data-routing.module';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MaterialModule } from '../material/material.module';
import { DynamicMatTableComponent } from '../dynamic-mat-table/dynamic-mat-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DynamicLoadingMatTableComponent } from '../dynamic-loading-mat-table/dynamic-loading-mat-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HcaiMultiSelectComponent } from '../hcai-multi-select/hcai-multi-select.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicDivComponent,
    DynamicTableComponent,
    DynamicMatTableComponent,
    DynamicLoadingMatTableComponent,
    HcaiMultiSelectComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    DynamicDataRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  exports: [
    DynamicDivComponent,
    DynamicTableComponent,
    DynamicMatTableComponent
  ]
})
export class DynamicDataModule { }
