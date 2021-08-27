import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Student {
  name: string;
  class: number;
  section: string;
  subj1: number;
  subj2: number;
  subj3: number;  
}

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  displayedColumns = [];
  data: Student[] = [];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {    
    this.getStudents().subscribe((res: Student[]) => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      for (const [key, value] of Object.entries(this.data[0])) {
        this.displayedColumns.push(key);
      }

      this.dataSource.sort = this.sort;
    }) 
  }

  getStudents() {
    return this._http.get("assets/students.json");
  }
}