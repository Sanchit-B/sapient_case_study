import { state, transition, style, animate, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.css'],
  animations: [
    trigger('banner', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(100%) scale(1)',
        // width: '90%',
        // marginTop: '200px',
        // height: '100px'
      })),
      state('highlight', style({
        backgroundColor: 'lightgreen',
        transform: 'translateX(100%) scale(1)',
        // width: '100%',
        // marginTop: '200px',
        // height: '200px'
      })),
      state('shrunken', style({
        backgroundColor: 'yellow',
        transform: 'scale(0.5)',
        // width: '100%',
        // marginTop: '200px',
        // height: '200px'
      })),
      transition('normal <=> highlight', animate(500)),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange'
        }),
        animate(1000, style({
          borderRadius: '50%'
        })),
        animate(500)
      ])
    ])
  ]
})
export class FloatingBannerComponent implements OnInit {

  istrue = false;
  state="normal";
  constructor() { }

  ngOnInit(): void {
  }

  stateChange() {
    this.state === 'normal' ? this.state = 'highlight' : this.state = 'normal';
  }

  shrunkState() {
    this.state = 'shrunken';
  }

}
