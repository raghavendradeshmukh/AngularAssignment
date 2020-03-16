import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatSort,MatPaginator} from '@angular/material';
import { ConstantService } from '@assignmentService/constant.service';
export interface PeriodicElement {
  FirstName: string;
  LastName: string;
  Class: string;
  RollNo: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {RollNo: 1, FirstName: 'Raghavendra', LastName:'Deshmukh', Class: 'First'},
  {RollNo: 2,FirstName: 'Sarang', LastName:'Dahiwale', Class: 'Second'},
  {RollNo: 3, FirstName: 'Pratik', LastName:'Bilonikar', Class: 'Third'},
  {RollNo: 4,FirstName: 'Madhuri', LastName:'Chaudhay', Class: 'Second'},
  {RollNo: 5, FirstName: 'Piyush', LastName:'Dawkar', Class: 'Fourth'},
  {RollNo: 6,FirstName: 'Vishal', LastName:'Jadhav', Class: 'Sixth'},
  {RollNo: 7, FirstName: 'Rahul', LastName:'Jaiswal', Class: 'Seven'},
  {RollNo: 8, FirstName: 'Sayeesh', LastName:'kanala', Class: 'Eight'},
  {RollNo: 9, FirstName: 'Sanket', LastName:'Kangle', Class: 'Ninth'},
  {RollNo: 10, FirstName: 'Rohit', LastName:'Joshi', Class: 'Fifth'},
];

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  displayedColumns: string[] = ['RollNo','FirstName', 'LastName', 'Class'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort,{static:true}) sort:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;

  constructor(public constantService:ConstantService) { }

  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }
  applyFilter(filter:string){
    this.dataSource.filter=filter.trim().toLowerCase();
  }

}
