import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit {

  dynamicDivs = [];
  lastOffset = 0;
  constructor() { }

  ngOnInit(): void {
    this.appendDivs(0, 10);
  }

  @HostListener('window:scroll', ['$event'])
  public onScrollingEvent(): void {
    let totScroll = window.innerHeight + window.scrollY;
    if ((totScroll - this.lastOffset) > document.body.offsetHeight) {
      // console.log((totScroll - this.lastOffset), document.body.offsetHeight);
      this.lastOffset = totScroll;
      let start = this.dynamicDivs.length;
      this.appendDivs(start, start+5);      
    }
  }

  appendDivs(start, end) {
    for(let i=start; i<end; i++) {
      this.dynamicDivs.push(i);
    }
  }

  showAlert(divcount) {
    alert(`Button in div ${divcount} clicked`)
  }

}
