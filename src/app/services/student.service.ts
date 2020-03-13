import { Injectable } from '@angular/core';
// import { Student } from '../model/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  mockUrl = "http://localhost:3001/students";

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<angularAssignment.Student[]> {
    return this.http.get<angularAssignment.Student[]>(this.mockUrl);
  }
  createEmployee(student: angularAssignment.Student): Observable<angularAssignment.Student> {
    return this.http.post<angularAssignment.Student>(this.mockUrl, student);
  }
}
