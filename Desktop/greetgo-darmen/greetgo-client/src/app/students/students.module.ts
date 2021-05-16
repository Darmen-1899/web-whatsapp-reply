import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {StudentsComponent} from "./students.component";
import { AddStudentComponent } from '../add-student/add-student.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [StudentsComponent, AddStudentComponent],
  exports: [
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule

  ],
  entryComponents: [AddStudentComponent],
  providers: []
})
export class StudentsModule { }
