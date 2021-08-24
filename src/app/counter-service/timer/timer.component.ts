import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timerValue: number = 0;
  constructor(
    private _counterService: CounterService
  ) { }

  ngOnInit(): void {
    this._counterService.timerValue.subscribe(res => {
      this.timerValue = res;
    });
  }
}
