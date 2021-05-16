import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./user.model";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



  constructor(
    private _userService: UserService,
    private router: Router,
  ) { }

  user = new User()

  username = this.user.username
  password = this.user.password

  showErrorMessage = false

  ngOnInit(): void {
    localStorage.clear();
  }

  login(user: User): void{
    this._userService.login(this.user)
      .subscribe(
        (response) => {

          this.redirect()
          this.showErrorMessage = false
          console.log(response)
        },
        (error) => {
          this.showErrorMessage = true
          this.clearField()
          console.log('error')
          console.log(error)
        }
      );
  }

  redirect():void{
    localStorage.setItem('admin', 'admin');
    this.router.navigate(['/students']).then();
  }

  clearField(): void {
    this.user.username = ''
    this.user.password = ''
  }


}
