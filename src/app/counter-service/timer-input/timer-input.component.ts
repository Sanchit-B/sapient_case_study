import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnInit {

  interval: any;
  timerValue: number = 0;

  timerForm: FormGroup;
  pauseCounter = false;


  constructor(
    private fb: FormBuilder,
    private _counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.timerForm = this.fb.group({
      timerValue: [0]
    });
  }

  submit() {
    if(this.timerForm.controls.timerValue.value && this.timerForm.controls.timerValue.value !==0) {
      this.timerValue = this.timerForm.controls.timerValue.value;
      this.pauseCounter = this.pauseCounter ? !this.pauseCounter : this.pauseCounter;
      this._counterService.pauseCounter.next(this.pauseCounter);
      this._counterService.resetValue.next(true);

      this.startTimer();
      this.timerForm.reset();
    } else {
      this.pauseCounter = !this.pauseCounter;
      if (!(this.timerValue < 1)) {
        this._counterService.pauseCounter.next(this.pauseCounter);
      }
    }
  }  

  reset() {
    this.timerForm.controls.timerValue.setValue(0);
    this._counterService.timerValue.next(0);
    this._counterService.resetValue.next(true);
    this.stopTimer();
  }

  startTimer() {
    this.stopTimer();
    this.interval = setInterval(() => {
      if(!this.pauseCounter && !(this.timerValue === 0)) {
        this.timerValue--;
        this._counterService.timerValue.next(this.timerValue);
      }
    }, 1000);
  }

  stopTimer(){
    clearInterval(this.interval);
  }

}
