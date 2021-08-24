import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { TimerComponent } from './timer/timer.component';
import { CountLoggerComponent } from './count-logger/count-logger.component';
import { TimeLoggerComponent } from './time-logger/time-logger.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { CounterComponent } from './counter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterComponent,
    TimerComponent,
    CountLoggerComponent,
    TimeLoggerComponent,
    TimerInputComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
