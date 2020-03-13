import { Component, OnInit } from '@angular/core';
// import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentData:angularAssignment.Student[]=[];
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
     this.studentService.getAllEmployee().subscribe((data) => {
       this.studentData = data;
       console.table(this.studentData);
     });
  }

}
