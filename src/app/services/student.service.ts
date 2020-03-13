import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  mockUrl = "http://localhost:3001/students";

  studentInfo: Student = {
    id: null,
    firstname: '',
    lastname: '',
    class: '',
    percentage: null,
    marks: null,
    dob:null
  };


  constructor(private http: HttpClient) { }

  // getAllEmployee(): Observable<Student[]> {
  //   return this.http.get<Student[]>(this.mockUrl);
  // }

  // createEmployee(student: Student) {
  //   return this.http.post<Student>(this.mockUrl, student);
  // }

  getAllEmployee(): Observable<Student[]> {
    return this.http.get<Student[]>(this.mockUrl);
  }
  createEmployee(student:Student):Observable<Student>{
    return this.http.post<Student>(this.mockUrl,student);
  }
}
