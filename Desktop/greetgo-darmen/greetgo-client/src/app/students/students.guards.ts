import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class StudentsGuards implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('admin')) {
      return true;
    }
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
