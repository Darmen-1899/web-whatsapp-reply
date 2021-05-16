import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {StudentsModule} from "./students/students.module";
import { AddStudentComponent } from './add-student/add-student.component';
import { UserComponent } from './user/user.component';
import {UserService} from "./user/user.service";
import {RouterModule} from "@angular/router";
import {StudentsGuards} from "./students/students.guards";



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        StudentsModule,
        RouterModule,

    ],
  providers: [HttpClient,UserService, StudentsGuards],
  bootstrap: [AppComponent],
  entryComponents: [StudentsComponent]
})
export class AppModule { }
