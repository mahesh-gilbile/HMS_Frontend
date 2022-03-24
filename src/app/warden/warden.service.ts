import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const BACKENDURL = environment.apiURL + "warden/";

@Injectable({
  providedIn : 'root'
})
export class WardenService{
  constructor(
    private http:HttpClient
  ){}

  getWardenInfo(){
    const id = this.getWardenID();
    return this.http.get(BACKENDURL + id);
  }

  getWardenID(){
    return localStorage.getItem('wardenID');
  }

  changePassword(n:any){
    const id = this.getWardenID();
    const data = {
      'currentPassword' : n.currentPassword,
      'newPassword' : n.newPassword,
      'reEnterNewPassword' : n.reEnterNewPassword
    }
    return this.http.post<any>(BACKENDURL + 'change_pass/' + id , data);
  }


}
