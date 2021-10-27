import { state, transition, style, animate, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

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
export class FloatingBannerComponent implements OnInit, OnDestroy {

  istrue = false;
  state="normal";
  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    let obs = new Observable((observer: Observer<number>) => {
      this.createObs(observer, 0);
    })

    let sub1 = obs.subscribe(
      res => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {

      }
    )

    this.subscriptions.push(sub1);

    let obs1 = new Observable((observer: Observer<number>) => {
      this.createObs(observer, 0);
    })

    let sub2;
    setTimeout(() => {
      sub2 = obs1.subscribe(
        res => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        },
        () => {

        }
      )

      this.subscriptions.push(sub2);
    }, 1000);


  }

  createObs(ob: Observer<number>, id) {
    setTimeout(() => {
      ob.next(id)
      this.createObs(ob, ++id);
    }, 1000);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      // console.log(sub);
      sub.unsubscribe();
    });
  }

  stateChange() {
    this.state === 'normal' ? this.state = 'highlight' : this.state = 'normal';
  }

  shrunkState() {
    this.state = 'shrunken';
  }

}
