import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit {

  dynamicDivs = [];
  constructor() { }

  ngOnInit(): void {
    this.appendDivs(0, 10);
  }

  @HostListener('window:scroll', ['$event'])
  public onScrollingEvent(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      let start = this.dynamicDivs.length;
      this.appendDivs(start, start+10);      
    }
  }

  appendDivs(start, end) {
    for(let i=start; i<end; i++) {
      this.dynamicDivs.push(i);
    }
  }

  showAlert(divcount) {
    alert(`Button  in div ${divcount} clicked`)
  }

}
