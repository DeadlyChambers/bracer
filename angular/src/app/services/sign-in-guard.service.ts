import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { RouteUrls } from '../constants/routes';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SignInGuardService implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly session: SessionService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.session.loggedIn$.pipe(
      take(1),
      map((loggedIn: boolean) => {

        if (loggedIn === false) {
          this.router.navigateByUrl(RouteUrls.LoginComponent);
          return false;
        }
        return true;
      }));
  }
}
