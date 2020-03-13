import { Component, OnInit } from '@angular/core';
// import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentInfo: angularAssignment.Student = {
    id: null,
    firstname: '',
    lastname: '',
    class: '',
    percentage: null,
    marks: null,
    dob: null
  };

  constructor(public studentService:StudentService, private constantService:ConstantService ) { }

  ngOnInit() {
  }

  onSubmit(student:angularAssignment.Student){
    if(student.id===null)
    {
      this.createEmployee(student);
    }
  }

  createEmployee(student:angularAssignment.Student){
    this.studentService.createEmployee(student).subscribe();
    console.log("Record Submitted!!!");
  }


}
