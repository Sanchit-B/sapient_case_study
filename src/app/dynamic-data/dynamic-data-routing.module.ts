import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

const routes: Routes = [
  {
    path: '', component: DynamicDivComponent
  },
  {
    path: 'table', component: DynamicTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDataRoutingModule { }
