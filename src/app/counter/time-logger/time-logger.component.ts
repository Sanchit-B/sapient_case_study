import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-logger',
  templateUrl: './time-logger.component.html',
  styleUrls: ['./time-logger.component.css']
})
export class TimeLoggerComponent implements OnInit, OnChanges {

  @Input() pauseCounter = true;
  @Input() timerValue = 0;

  @Output() totalCountEvent = new EventEmitter();
  startPauses: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

    if(this.timerValue !== 0) {
      let obj = {
        timestamp: Date.now(),
        eventOccured: this.pauseCounter ? 'PAUSED' : 'STARTED'
      };
      this.startPauses.push(obj);
  
    } else {
      this.startPauses = [];
    }

    let tot = {
      paused: this.getTotalPaused(),
      starts: this.startPauses.length - this.getTotalPaused()
    }

    this.totalCountEvent.emit(tot)
  }

  getTotalPaused() {
    let tot = this.startPauses.filter((val: any) => val.eventOccured === 'PAUSED').length;

    return tot;
  }

}
