import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
// import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface Element {
  name: string;
  position: string;
  weight: string;
  status: string;
  'Proposed Amount($)': string;
  symbol: string;
}

@Component({
  selector: 'app-dynamic-mat-table',
  templateUrl: './dynamic-mat-table.component.html',
  styleUrls: ['./dynamic-mat-table.component.css']
})
export class DynamicMatTableComponent implements OnInit, AfterViewInit {
  @Input() data: Element[];
  @Input() columnsToDisplayLinks = [];
  columnWidths = ['10%', '10%', '10%', '10%', '30%', '30%']
  displayedColumns = [];
  disabledColumns = ['symbol'];
  dataLength = 20;
  dataSource: any;
  showPaginator = true;
  sortProperty = 'Document';
  sortDirection = 'asc';
  page = 1;
  pageSize = 10;
  totalCnt = 100;
  previousLabel = "< Prev"
  NextLabel = "Next >"
  

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.displayedColumns = Object.keys(this.data[0]);
    this.getdata();
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.getAssociatedDocuments();
    this.sort.sortChange.subscribe(() => {
      this.getAssociatedDocuments();
    });
  }

  pageChanged(event: any) {
    this.page = event;
    this.getAssociatedDocuments();
  }

  getAssociatedDocuments() {
    console.log(this.page, this.sort.direction, this.sort.active);

    let fetchedData = this.data.slice(this.page * this.pageSize - this.pageSize, this.page * this.pageSize);
    this.dataSource = new MatTableDataSource(fetchedData);
    this.dataSource.sort = this.sort;
  }  

  isSortingDiasbledColumn(column) {
    if(this.disabledColumns.indexOf(column) === -1) return false;
    else return true;
  }

  PopupWindow(url, event): void {
    event.preventDefault();
    // event.stopPopagation();
    let features = ',resizable=yes,scrollbars=yes';
    window.open(url, '_blank', features);
  }

  getdata() {
    this.getStudents().subscribe((res) => {
      console.log(res);
      
    }) 
  }

  getStudents() {
    return this._http.get("assets/formData.json");
  }
}
