import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';
// import {StudentData } from 'src/app/model/student.model';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-student-data-form',
  templateUrl: './student-data-form.component.html',
  styleUrls: ['./student-data-form.component.css']
})
export class StudentDataFormComponent implements OnInit {

  constructor(private studentService:StudentDataService,private constantService:ConstantService) { }

  onSubmit(student:angularAssignment.StudentData){
    if(student.id===null)
    {
      this.createEmployee(student);
    }
    else{
      this.updateEmployee(student);
    }
  }

  ngOnInit() {
  }
  createEmployee(student:angularAssignment.StudentData){
    this.studentService.createEmployee(student).subscribe();
  }
  updateEmployee(student:angularAssignment.StudentData){
    this.studentService.updateEmployee(student).subscribe();
  }
}
