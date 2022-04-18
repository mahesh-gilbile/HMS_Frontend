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

  applyForLeaves(n:any){
    const id = this.getSecurityStaffID();
    const data = {
        "from" : n.from,
        "to" : n.to,
        "days" : n.days,
        "reason" : n.reason
    }
    return this.http.post<any>(BACKENDURL + 'leaves/' + id , data)
  }

  historyLeaves(){
    const id = this.getSecurityStaffID();
    return this.http.get<any>(BACKENDURL + 'leaves/' + id);
  }

  getGateInfo(){
    const id = this.getSecurityStaffID();
    return this.http.get<any>(BACKENDURL + "getHostelName/" + id);
  }

  generateQRCode(){
    const id = this.getSecurityStaffID();
    return this.http.get<any>(BACKENDURL + 'GenerateQRForGate/' + id);
  }

  getTodayQRHistory(){
    const id = this.getSecurityStaffID();
    return this.http.get<any>(BACKENDURL + 'getTodayQRHistory/' + id);
  }

  getQRInfo(ID){
    return this.http.get<any>(BACKENDURL + '/getQRIDInfo/' + ID);
  }
}
