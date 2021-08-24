import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  pauseCounter = new BehaviorSubject<boolean>(false);

  timerValue = new BehaviorSubject<number>(0);

  resetValue = new BehaviorSubject<boolean>(true);

  totalCount = new BehaviorSubject<{ paused: number, starts: number }>({ paused: 0, starts: 0 });

  constructor() { }
}
