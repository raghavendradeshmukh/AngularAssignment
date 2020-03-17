import { Component, OnInit, ViewChild } from '@angular/core';
// import { Student } from 'src/app/model/student.model';
// import { StudentService } from 'src/app/services/student.service';
import {StudentService} from '@assignmentService/student.service';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { ConstantService } from '@assignmentService/constant.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentData:angularAssignment.Student[]=[];
  dataSource;
  constructor(private studentService:StudentService,public constantService:ConstantService) { }

  displayedColumns: string[] = ['firstname','lastname', 'dob', 'class','percentage','marks'];
  // dataSource =new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort,{static:true}) sort:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;


  ngOnInit() {
    // this.getAllStudent();
    this.studentService.getAllEmployee().subscribe(data=>{
      // this.allStudentData=data;
      if(!data){
        return;
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
  });
  }

  getAllStudent() {
     this.studentService.getAllEmployee().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
       console.table(this.studentData);
     });
  }
  applyFilter(filter:string)
  {
    this.dataSource.filter=filter.trim().toLowerCase();
  }

}
