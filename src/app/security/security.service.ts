import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const BACKENDURL = environment.apiURL + "security/"

@Injectable({
  providedIn : 'root'
})

export class SecurityService{
  constructor(
    private http:HttpClient
  ){}


  getSecurityStaffID(){
    return localStorage.getItem('securityID');
  }

  getSecurityStaffInfo(){
    const id = this.getSecurityStaffID();
    return this.http.get<any>(BACKENDURL + id);
  }

  changePassword(n:any){
    const id = this.getSecurityStaffID();
    const data ={
      'currentPassword' : n.currentPassword,
      'newPassword' : n.newPassword,
      'reEnterNewPassword' : n.reEnterNewPassword
    }

    return this.http.post<any>(BACKENDURL + 'change_pass/' + id , data);
  }
}
