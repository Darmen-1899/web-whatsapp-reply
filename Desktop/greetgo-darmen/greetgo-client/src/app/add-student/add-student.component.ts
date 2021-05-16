import {Component, Inject, OnInit} from '@angular/core';
import {Student} from "../students/student.model";
import {StudentsService} from "../students/students.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  student = new Student()
  students: Student[] = []
  constructor(private _studentsService: StudentsService,
              private dialog: MatDialog
  ) { }



  ngOnInit(): void {


  }
  addStudent():void{
    console.log(this.student)
    console.log(this.student.isEmpty())
    if (!this.student.isEmpty()) {
      this.showError = true

      return;
    }
    this._studentsService.addStudent(this.student).subscribe(() => this.closeWindow());
  }

  closeWindow(): void {
    this.dialog.closeAll();
  }

  showError = false

  checkAddStudent():boolean {
    // if (student.grade != null && student.firstname != null
    // && student.lastname != null && student.grade != null)

    return this.student.isEmpty();
  }

  clearField(): void {
    this.student.lastname = ''
    this.student.firstname = ''
    this.student.yearsOld = null
    this.student.grade = ''
  }

}
