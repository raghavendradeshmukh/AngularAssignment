import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';
import {StudentData } from 'src/app/model/student.model';

@Component({
  selector: 'app-student-data-form',
  templateUrl: './student-data-form.component.html',
  styleUrls: ['./student-data-form.component.css']
})
export class StudentDataFormComponent implements OnInit {

  constructor(private studentService:StudentDataService) { }

  onSubmit(student:StudentData){
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
  createEmployee(student:StudentData){
    this.studentService.createEmployee(student).subscribe();
  }
  updateEmployee(student:StudentData){
    this.studentService.updateEmployee(student).subscribe();
  }
}
