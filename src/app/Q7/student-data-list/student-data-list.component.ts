import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatSort,MatPaginator} from '@angular/material';
// import { StudentData } from 'src/app/model/student.model';
// import { StudentDataService } from 'src/app/services/student-data.service';
import {StudentDataService} from '@assignmentService/student-data.service';


@Component({
  selector: 'app-student-data-list',
  templateUrl: './student-data-list.component.html',
  styleUrls: ['./student-data-list.component.css']
})
export class StudentDataListComponent implements OnInit {

  allStudentData:angularAssignment.StudentData[]=[];
  dataSource;
  
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['rollno','firstname', 'lastname', 'class','percentage','marks','edit','delete'];
  // dataSource =new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort,{static:true}) sort:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;

  constructor(private student:StudentDataService){}

  ngOnInit() {
    // this.dataSource.sort=this.sort;
    // this.dataSource.paginator=this.paginator;
    this.student.getAllEmployee().subscribe(data=>{
      // this.allStudentData=data;
      if(!data){
        return;
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
  });
}
  
  getAllStudentData(){
    this.student.getAllEmployee().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    });
  }
  applyFilter(filter:string)
  {
    this.dataSource.filter=filter.trim().toLowerCase();
  }

  DeleteStudent(id:number){
    this.student.deleteEmployee(id).subscribe((data:angularAssignment.StudentData)=>{
      this.getAllStudentData();
    });
  }
  editStudent(student:angularAssignment.StudentData) {
    this.student.studentInfo=Object.assign({},student);
  }
}
