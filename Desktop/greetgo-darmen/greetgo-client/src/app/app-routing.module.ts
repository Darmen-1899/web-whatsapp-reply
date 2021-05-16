import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import {UserComponent} from "./user/user.component";
import {BrowserModule} from "@angular/platform-browser";
import {StudentsGuards} from "./students/students.guards";


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'students', component:  StudentsComponent, canActivate : [StudentsGuards]},
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
