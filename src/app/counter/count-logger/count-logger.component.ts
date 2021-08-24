import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-logger',
  templateUrl: './count-logger.component.html',
  styleUrls: ['./count-logger.component.css']
})
export class CountLoggerComponent implements OnInit {

  @Input() totalCountEvent = {
    paused: 0,
    starts: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
