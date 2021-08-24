import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnInit {

  timerForm!: FormGroup;
  pause = false;
  @Output() timerValue = new EventEmitter();
  @Output() resetValue = new EventEmitter();
  @Output() pauseCounter = new EventEmitter();


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.timerForm = this.fb.group({
      timerValue: [0]
    });
  }

  submit() {
    if(this.timerForm.controls.timerValue.value && this.timerForm.controls.timerValue.value !==0) {
      this.pause = this.pause ? !this.pause : this.pause;
      this.pauseCounter.emit(this.pause);
      this.timerValue.emit(this.timerForm.controls.timerValue.value);
      this.timerForm.reset();
    } else {
      this.pause = !this.pause;
      this.pauseCounter.emit(this.pause);
    }
  }  

  reset() {
    this.timerForm.controls.timerValue.setValue(0);
    this.resetValue.emit();
  }

}
