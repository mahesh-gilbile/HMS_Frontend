import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const BACKENDURL_Warden = environment.apiURL + "warden/";
const BACKENDURL_Student = environment.apiURL + "student/";
const BACKENDURL_Secretory = environment.apiURL + "secretory/";

@Injectable({
  providedIn : 'root'
})
export class WardenService{
  constructor(
    private http:HttpClient
  ){}

  getWardenInfo(){
    const id = this.getWardenID();
    return this.http.get(BACKENDURL_Warden + id);
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
    return this.http.post<any>(BACKENDURL_Warden + 'change_pass/' + id , data);
  }

  getHostelDetails(){
    const id = this.getWardenID();
    return this.http.get(BACKENDURL_Warden + "getHostelDetails/" + id);
  }

  getWingDetails(id){
    return this.http.get(BACKENDURL_Warden + "getWingDetails/" + id);
  }

  getRoomDetails(id){
    return this.http.get(BACKENDURL_Warden + "getRoomDetails/" + id);
  }

  getStudentDetails(id){
    return this.http.get<any>(BACKENDURL_Student + id);
  }

  getGateHistory(id){
    return this.http.get<any>(BACKENDURL_Warden + 'getGateHistory/' + id);
  }

  applyForLeaves(n:any){
    const id = this.getWardenID()
    const data = {
        "from" : n.from,
        "to" : n.to,
        "days" : n.days,
        "reason" : n.reason
    }
    return this.http.post<any>(BACKENDURL_Warden + 'leaves/' + id , data)
  }

  historyLeaves(){
    const id = this.getWardenID()
    return this.http.get<any>(BACKENDURL_Warden + 'leaves/' + id);
  }

  getStaffLeavesInfo(){
    const id = this.getWardenID();
    return this.http.get<any>(BACKENDURL_Warden + 'LeaveDecision/' + id);
  }

  changeStatus(status , l_id){
    const data = {
      "ID" : l_id,
      "Status" : status,
      "DecisionTakenByType" : "Warden",
    }
    const id = this.getWardenID();
    return this.http.post<any>(BACKENDURL_Warden + 'LeaveDecision/' + id , data);
  }

  getStudentList(){
    return this.http.get<any>(BACKENDURL_Secretory + 'getStdList');
 }

}
