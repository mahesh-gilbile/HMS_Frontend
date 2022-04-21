import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { SharedService } from "../SharedModule/Service/shared.service";

const BACKENDURL = environment.apiURL + "auth/";

@Injectable({
  providedIn : 'root'
})

export class AuthService{
  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: SharedService
  ) {}

  onLogin(username:string , password:string, role:string){
    this.sharedService.visibleSpinner(true);
    const data ={
      "username" : username,
      "password" : password,
      "role" : role
    }
    this.http.post<any>(BACKENDURL + "login",data).
    subscribe((data) => {
      switch(data.role){
        case 'Student':
          this.router.navigate(['student']);
          localStorage.setItem('role' , data.role)
          localStorage.setItem('studentID' , data.id)
          break;
        case 'Mess':
          this.router.navigate(['mess']);
          localStorage.setItem('role' , data.role)
          localStorage.setItem('messID' , data.id)
          break;
        case 'Security':
          this.router.navigate(['security']);
          localStorage.setItem('role' , data.role)
          localStorage.setItem('securityID' , data.id)
          break;
        case 'Warden':
          this.router.navigate(['warden']);
          localStorage.setItem('role' , data.role)
          localStorage.setItem('wardenID' , data.id)
          break;
        case 'Secretory':
          this.router.navigate(['secretory']);
          localStorage.setItem('role' , data.role)
          localStorage.setItem('secretoryID' , data.id)
          break;
          case 'Admin':
            this.router.navigate(['admin']);
            localStorage.setItem('role' , data.role)
            localStorage.setItem('adminID' , data.id)
            break;
      }
      this.sharedService.visibleSpinner(false);
    },error => {
      console.log(error.error)
      this.sharedService.visibleSpinner(false);
      alert(error.error)
    })

  }

  onLogout(){
    localStorage.clear();
  }
}
