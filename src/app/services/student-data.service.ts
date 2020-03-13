import { Injectable } from '@angular/core';
// import { StudentData } from '../model/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  mockUrl = "http://localhost:3000/studentsDB";

  studentInfo: angularAssignment.StudentData = {
    id: null,
    rollno:null,
    firstname: '',
    lastname: '',
    class: '',
    percentage: null,
    marks: null
  };

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<angularAssignment.StudentData[]> {
    return this.http.get<angularAssignment.StudentData[]>(this.mockUrl);
  }

  createEmployee(student:angularAssignment.StudentData):Observable<angularAssignment.StudentData>{
    return this.http.post<angularAssignment.StudentData>(this.mockUrl,student);
  }

  deleteEmployee(id: number): Observable<angularAssignment.StudentData> {
    return this.http.delete<angularAssignment.StudentData>(this.mockUrl + '/' + id);
  }

  updateEmployee(student: angularAssignment.StudentData): Observable<angularAssignment.StudentData> {
    return this.http.put<angularAssignment.StudentData>(this.mockUrl + "/" + student.id, student);
  }
}
