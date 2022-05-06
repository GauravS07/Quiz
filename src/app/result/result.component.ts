import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
    name: string;
    position: number;
    tName: any;
    mObtained: string;
    tMarks:any
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Gaurav', tName:"Javascript"  , mObtained: '10', tMarks:"10"   },
    {position: 2, name: 'Sagar',  tName:"Asp.net" , mObtained: '8' ,tMarks:"10"   },
    {position: 3, name: 'Test 1', tName:"C sharp"  , mObtained: '10' ,tMarks:"10"    },
    {position: 4, name: 'Test 2', tName:"Javascript"  , mObtained: '5',tMarks:"10" },
    {position: 5, name: 'Test 3', tName:"Javascript"  , mObtained: '10' ,tMarks:"10"   },
  ];

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'tName', 'mObtained','tMarks'];
  dataSource = ELEMENT_DATA;

}
