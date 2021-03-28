import { AdminService } from './../../app/+shared/services/admin.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate{
  isAdmin: boolean =false
  constructor(private authAdmin:AdminService, private router: Router){
  }
  canActivate(next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{
      this.authAdmin.authAdmin().subscribe(
        data =>

            {
              this.isAdmin =true
            },
            err =>{
              this.router.navigateByUrl('/notauthorized');
              this.isAdmin =false

            }
            )
            return this.isAdmin
    }
}
