import { Injectable } from '@angular/core';
import { StudentData } from '../model/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  mockUrl = "http://localhost:3000/studentsDB";

  studentInfo: StudentData = {
    id: null,
    rollno:null,
    firstname: '',
    lastname: '',
    class: '',
    percentage: null,
    marks: null
  };

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<StudentData[]> {
    return this.http.get<StudentData[]>(this.mockUrl);
  }

  createEmployee(student:StudentData):Observable<StudentData>{
    return this.http.post<StudentData>(this.mockUrl,student);
  }

  deleteEmployee(id: number): Observable<StudentData> {
    return this.http.delete<StudentData>(this.mockUrl + '/' + id);
  }

  updateEmployee(student: StudentData): Observable<StudentData> {
    return this.http.put<StudentData>(this.mockUrl + "/" + student.id, student);
  }
}
