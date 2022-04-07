import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

export interface dropdownData {
  Key: string;
  Value: string;
}

@Component({
  selector: 'app-hcai-multi-select',
  templateUrl: './hcai-multi-select.component.html',
  styleUrls: ['./hcai-multi-select.component.css']
})
export class HcaiMultiSelectComponent implements OnInit {

  @ViewChild('multiselectDD') multiselectDD: ElementRef;
  
  @Input() dropdownDataList: dropdownData[] = [];
  @Input() showSearchBar:boolean = false;
  @Input() showTotalResultCount:boolean = false;
  @Input() searchBarPlaceHolder = "";
  @Input() maxRecordsToDisplayAtOnce = 20;

  @Output() listSelectedValues = new EventEmitter();
  
  searchTerm = "";

  anyValue = {
    Key: null,
    Value: 'Any'
  };
  selectedValues: dropdownData[] = [this.anyValue];
  selectedValuesToDisplay = "";

  showOptions = false;
  showOptionsDownwards = false;

  constructor() { }
  
  ngOnInit(): void {}

  selectValue(item: dropdownData) {
    let idx = this.doesExistsInSelectedValues(item.Key);
    if(idx == -1) {
      let anyIdx = this.doesExistsInSelectedValues('Any');
      if(anyIdx > -1) {
        this.selectedValues.splice(anyIdx, 1);
      }
      this.selectedValues.push(item);
    } else {
      this.selectedValues.splice(idx, 1);
      if(this.selectedValues.length == 0) {
        this.selectedValues.push(this.anyValue);
      }
    }

    this.concatSelectedValues();
  }

  doesExistsInSelectedValues(val) {
    let foundIdx = this.selectedValues.findIndex((drpdownItem) => {
      return drpdownItem.Key === val || drpdownItem.Value === val
    });

    return foundIdx;
  }
  
  concatSelectedValues() {
    this.selectedValuesToDisplay = "";

    let anyIdx = this.doesExistsInSelectedValues('Any');
    if(anyIdx > -1) {
      return;
    }

    this.selectedValues.forEach((obj, i) => {
      this.selectedValuesToDisplay += obj.Value + (i < this.selectedValues.length - 1 ? '; ' : '')
    });
  }

  showHideOptions(event: any, id: string) {
    if(id == 'multiselect-dropdown') {
      this.showOptions = !this.showOptions
      let el = event?.srcElement;
      if(this.showOptions) {
        if(window.innerHeight - el.getBoundingClientRect().bottom > 200) {
          this.showOptionsDownwards = true;
          console.log(this.showOptionsDownwards);
        } else {
          this.showOptionsDownwards = false;
          console.log(this.showOptionsDownwards);
        }
      }
    }
  }

  movefocus(event:any, keypressed: string) {
    if(keypressed == 'arrowDown') {
      event.target.nextElementSibling.focus();
    } else {
      event.target.previousElementSibling.focus();
    }
  }

  /**
   * To close the dropdown on clicking outside 
   * this multiselect dropdown
   */
  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  toggle(event) {
    if (!this.multiselectDD.nativeElement.contains(event.target)) {
      this.showOptions = false;
      this.listSelectedValues.emit(this.selectedValues);
    } 
  }

}
