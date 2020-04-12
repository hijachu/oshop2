import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AppUser } from './modals/app-user';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .pipe(
        map(appUser => appUser.isAdmin)
      );
  }
}
