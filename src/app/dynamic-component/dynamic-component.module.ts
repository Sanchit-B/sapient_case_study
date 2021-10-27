import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { DynamicComponentComponent } from './dynamic-component.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { PlaceholderDirective } from '../placeholder.directive';

@NgModule({
  declarations: [
    DynamicComponentComponent,
    AlertComponentComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ],
  exports: [
    DynamicComponentComponent
  ]
})
export class DynamicComponentModule { }
