import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-time-logger',
  templateUrl: './time-logger.component.html',
  styleUrls: ['./time-logger.component.css']
})
export class TimeLoggerComponent implements OnInit {
  
  startPauses: any = [];
  constructor(
    private _counterService: CounterService
  ) { }

  ngOnInit(): void {
    this._counterService.pauseCounter.subscribe(res => {
      console.log(res);
      let obj = {
        timestamp: Date.now(),
        eventOccured: res ? 'PAUSED' : 'STARTED'
      };
      this.startPauses.push(obj);
      console.log(this.startPauses);

      this.getTotalPaused();
    });

    this._counterService.resetValue.subscribe(res => {
      this.startPauses = [];
      this.getTotalPaused();
    });
  }

  getTotalPaused() {
    let length = this.startPauses.filter((val: any) => val.eventOccured === 'PAUSED').length;

    this._counterService.totalCount.next({
      paused: length,
      starts: this.startPauses.length - length
    });
  }

}
