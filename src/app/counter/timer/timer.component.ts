import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges {

  @Input() timerValue: number = 0;

  @Input() pauseCounter = true;
  interval: any;
  constructor() { }

  ngOnInit(): void {}
  
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if(this.timerValue !== 0) {
      this.stopTimer();
      this.interval = setInterval(() => {
        if(!this.pauseCounter && !(this.timerValue === 0)) {
          this.timerValue--;
        }
      }, 1000);
    } else {
      this.stopTimer();
    }
  }

  stopTimer(){
    clearInterval(this.interval);
  }
}
