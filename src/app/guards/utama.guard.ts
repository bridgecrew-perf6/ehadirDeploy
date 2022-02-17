import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtamaGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(
    public storageService: StorageService,
    public router: Router
    ) { }

  canActivate(): Promise<boolean>{
    return new Promise(resolve => {
     this.storageService.get('token').then(res => {
       if(res) {
         resolve(true);
       } else {
         this.router.navigate(['login']);
         resolve(false);
       }
     }).catch(err => {
       this.router.navigate(['login']);
      //console.log(err);
       resolve(false);
     });
    });
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
