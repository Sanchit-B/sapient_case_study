import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count-logger',
  templateUrl: './count-logger.component.html',
  styleUrls: ['./count-logger.component.css']
})
export class CountLoggerComponent implements OnInit {

  totalCount = {
    paused: 0,
    starts: 0
  };
  constructor(
    private _counterService: CounterService
  ) { }

  ngOnInit(): void {
    this._counterService.totalCount.subscribe(res => {
      this.totalCount = res;
    });
  }

}
