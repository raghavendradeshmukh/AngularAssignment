import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  constructor(public studentService:StudentService) { }

  ngOnInit() {
  }

  onSubmit(student:Student){
    if(student.id===null)
    {
      this.createEmployee(student);
    }
   
  }

  createEmployee(student:Student){
    this.studentService.createEmployee(student).subscribe();
    // this.studentService.createEmployee(student).subscribe();
    console.log("Record Submitted!!!");
  }


}
