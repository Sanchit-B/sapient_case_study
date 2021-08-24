import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterServiceRoutingModule } from './counter-service-routing.module';
import { CounterComponent } from './counter.component';
import { TimerComponent } from './timer/timer.component';
import { CountLoggerComponent } from './count-logger/count-logger.component';
import { TimeLoggerComponent } from './time-logger/time-logger.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
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
    CounterServiceRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterServiceModule { }
