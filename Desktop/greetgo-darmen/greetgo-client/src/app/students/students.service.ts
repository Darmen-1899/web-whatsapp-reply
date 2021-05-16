import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { Student } from './student.model';
import {NgModel} from "@angular/forms";
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class StudentsService {

  constructor(private httpService: HttpClient) { }

  getStudents(): Observable<Object> {
    const url = 'http://localhost:8080/students';
    return this.httpService.get(url).pipe(
        map(res => {
          console.log(res)
        return res;
        }
    )
    )
  }

  addStudent(student : Student) {
    const url = 'http://localhost:8080/add-student';
    const options: {} = {headers: {'Content-Type': 'application/json'}, responseType: 'text'}
    return this.httpService.post(url, student, options);
  }

  deleteStudent(id : number) {
    const url = 'http://localhost:8080/delete-student';
    const options: {} = {headers: {'Content-Type': 'application/json'}, responseType: 'text'}
    return this.httpService.post(url, id, options);
  }
}
