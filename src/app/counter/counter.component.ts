import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../can-deactivate-guard.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, CanComponentDeactivate {

  timerValue: number = 0;
  pause = true;
  totCount = {
    paused: 0,
    starts: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

  startTimer($event: any) {
    if($event) {
      this.timerValue = $event;
    }
  }

  pauseCounter($event: any) {
    this.pause = $event;
  }

  totalCountEvent($event: any) {
    this.totCount = $event;
  }

  resetValue($event: any) {
    this.pause = true;
    this.timerValue = 0;
  }

  canDeactivate(): Observable<boolean>|Promise<boolean>|boolean {
    return this.pause;
  }

}
