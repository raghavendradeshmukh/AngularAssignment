import { Component, OnInit } from '@angular/core';
// import { StudentDataService } from 'src/app/services/student-data.service';
import {StudentDataService} from '@assignmentService/student-data.service';
// import {StudentData } from 'src/app/model/student.model';
// import { ConstantService } from 'src/app/services/constant.service';
import {ConstantService} from '@assignmentService/constant.service';


@Component({
  selector: 'app-student-data-form',
  templateUrl: './student-data-form.component.html',
  styleUrls: ['./student-data-form.component.css']
})
export class StudentDataFormComponent implements OnInit {

  constructor(public studentService:StudentDataService,public constantService:ConstantService) { }
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
