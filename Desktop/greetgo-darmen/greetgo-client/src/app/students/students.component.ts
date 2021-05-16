import {Component, OnInit} from '@angular/core';
import {StudentsService} from './students.service';
import {Student} from './student.model';
import {MatDialog} from '@angular/material/dialog';
import {AddStudentComponent} from '../add-student/add-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = []
  student = new Student()

  constructor(private _studentsService: StudentsService,
              private dialog: MatDialog
  ){
    this.students = [];
  }

  ngOnInit(): void {
        this.getStudents();
        // this.form = this.fb.group({
        //   name: ['']
        // })
    };

    getStudents():void {

      this._studentsService.getStudents().subscribe(result=> {
        const me = Object.create(result)
        this.students = me
        console.log(this.students);})
    }

    addStudent():void{
      this._studentsService.addStudent(this.student).subscribe(
        (response) =>this.getStudents()

      )
    }

  openDialog(): void {

    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {

      this.getStudents();
    });
  }

  deleteStudent(id: number) {
    this._studentsService.deleteStudent(id).subscribe(() => this.getStudents());
  }
}
