import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { dropdownData } from '../hcai-multi-select/hcai-multi-select.component';

export interface Element {
  Plan: string;
  Document: string;
  Facility: string;
  status: string;
  'Proposed Amount($)': string;
  'Approved Amount($)': string;
}

@Component({
  selector: 'app-dynamic-loading-mat-table',
  templateUrl: './dynamic-loading-mat-table.component.html',
  styleUrls: ['./dynamic-loading-mat-table.component.css']
})
export class DynamicLoadingMatTableComponent implements OnInit {

    dropdownDataList: dropdownData[] = [];
    
    parent = [['OCF18', 'OCF21B'], ['OCF23', 'OCF21C'], ['Form1']];
    data: Element[] = [
        {
            Document: "https://www.w3schools.com$$21122400017",
            Plan: 'Hydrogen', 
            Facility: '1.0079', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'H'
        },
        {
            Document: "https://www.w3schools.com$$21122400016",
            Plan: 'Helium', 
            Facility: '4.0026', 
            status: 'In Review, tagged by Sapient, InsuerUser, In Review, tagged by Sapient, InsuerUser, In Review, tagged by Sapient, InsuerUser, In Review, tagged by Sapient, InsuerUser',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'He'
        },
        {
            Document: "https://www.w3schools.com$$21122400011",
            Plan: 'Lithium', 
            Facility: '6.941', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Li'
        },
        {
            Document: "https://www.w3schools.com$$21122400008",
            Plan: 'Beryllium', 
            Facility: '9.0122', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Be'
        },
        {
            Document: "https://www.w3schools.com$$21122400009",
            Plan: 'Boron', 
            Facility: '10.811', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'B'
        },
        {
            Document: "https://www.w3schools.com$$21122400015",
            Plan: 'Carbon', 
            Facility: '12.0107', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'C'
        },
        {
            Document: "https://www.w3schools.com$$21122400002",
            Plan: 'Nitrogen', 
            Facility: '14.0067', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'N'
        },
        {
            Document: "https://www.w3schools.com$$21122400019",
            Plan: 'Oxygen', 
            Facility: '15.9994', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'O'
        },
        {
            Document: "https://www.w3schools.com$$21122400020",
            Plan: 'Fluorine', 
            Facility: '18.9984', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'F'
        },
        {
            Document: "https://www.w3schools.com$$21122400018",
            Plan: 'Neon', 
            Facility: '20.1797', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Ne'
        },
        {
            Document: "https://www.w3schools.com$$21122400012",
            Plan: 'Sodium', 
            Facility: '22.9897', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Na'
        },
        {
            Document: "https://www.w3schools.com$$21122400023",
            Plan: 'Magnesium', 
            Facility: '24.305', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Mg'
        },
        {
            Document: "https://www.w3schools.com$$21122400021",
            Plan: 'Aluminum', 
            Facility: '26.9815', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Al'
        },
        {
            Document: "https://www.w3schools.com$$21122400022",
            Plan: 'Silicon', 
            Facility: '28.0855', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Si'
        },
        {
            Document: "https://www.w3schools.com$$21122400001",
            Plan: 'Phosphorus',
            Facility: '30.9738', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'P'
        },
        {
            Document: "https://www.w3schools.com$$21122400004",
            Plan: 'Sulfur', 
            Facility: '32.065', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'S'
        },
        {
            Document: "https://www.w3schools.com$$21122400006",
            Plan: 'Chlorine', 
            Facility: '35.453', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Cl'
        },
        {
            Document: "https://www.w3schools.com$$21122400025",
            Plan: 'Argon', 
            Facility: '39.948', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Ar'
        },
        {
            Document: "https://www.w3schools.com$$21122400024",
            Plan: 'Potassium', 
            Facility: '39.0983', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'K'
        },
        {
            Document: "https://www.w3schools.com$$21122400026",
            Plan: 'Calcium', 
            Facility: '40.078', 
            status: 'Review Required',
            'Proposed Amount($)': '$123456',
            'Approved Amount($)': 'Ca'
        },
    ];
    showData = [];
    columnsToDisplayLinks = [];
    constructor(
        private _http: HttpClient
    ) { }

    ngOnInit(): void {
        this.showData = this.data;
        this.columnsToDisplayLinks = ['Document'];
        this.getdata();
    }

    listSelectedValues1(event: any) {
        console.log('1', event);
    }

    listSelectedValues2(event: any) {
        console.log('2', event);
    }

    listSelectedValues3(event: any) {
        console.log('3', event);
    }

    getdata() {
        this.getClaimants().subscribe((res: dropdownData[]) => {
          console.log(res);
          this.dropdownDataList = res;
        });
    }

    getClaimants() {
        return this._http.get("assets/multiselect.json");
    }
}
