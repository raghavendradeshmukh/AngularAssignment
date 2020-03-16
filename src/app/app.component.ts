import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment';
  Links: any[] = [
    {
      "name": "/",
      "title":"Q1"
    },
    {
      "name": "/agecalculator",
      "title":"Q2"
    },
    {
      "name":"/registrationform",
      "title":"Q3"
    },
    {
      "name": "/addStudentData",
      "title":"Q4"
    },
    {
      "name": "/matTable",
      "title":"Q5"
    },
    {
      "name": "/welcomePage",
      "title":"Q6"
    },
    {
      "name": "/studentCrudOpreation",
      "title":"Q7"
    }
  ];
}
