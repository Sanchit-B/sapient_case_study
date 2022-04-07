import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicLoadingMatTableComponent } from '../dynamic-loading-mat-table/dynamic-loading-mat-table.component';
import { DynamicMatTableComponent } from '../dynamic-mat-table/dynamic-mat-table.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

const routes: Routes = [
  {
    path: '', component: DynamicDivComponent
  },
  {
    path: 'table', component: DynamicTableComponent
  },
  {
    path: 'mat-table', component: DynamicLoadingMatTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDataRoutingModule { }
