import { DatePipe } from '@angular/common';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


const BACKENDURL = environment.apiURL + "admin/";
const BACKENDURL_Secretory = environment.apiURL + "secretory/";
const BACKENDURL_Warden = environment.apiURL + "warden/";
const BACKENDURL_Mess = environment.apiURL + "mess/";
const BACKENDURL_Security = environment.apiURL + "security/";


@Injectable({
    providedIn : 'root'
})

export class AdminService{
  constructor(
      private http: HttpClient
  ) { }

  getAdminID(){
      return localStorage.getItem('adminID')
  }

  getAdminInfo(){
      const id = this.getAdminID();
      return this.http.get(BACKENDURL + id);
  }

  changePassword(n:any){
    const id = this.getAdminID();
    const data = {
      'currentPassword' : n.currentPassword,
      'newPassword' : n.newPassword,
      'reEnterNewPassword' : n.reEnterNewPassword
    }
    return this.http.post<any>(BACKENDURL + 'change_pass/' + id , data);
  }

  getStaffLeavesInfo(){
    const id = this.getAdminID();
    return this.http.get<any>(BACKENDURL + 'LeaveDecision/' + id);
  }


  changeStatus(status , l_id){
    const data = {
      "ID" : l_id,
      "Status" : status,
      "DecisionTakenByType" : "Admin",
    }
    const id = this.getAdminID();
    return this.http.post<any>(BACKENDURL + 'LeaveDecision/' + id , data);
  }

  //Secretory Services
  getSecretoriesInfo(){
    return this.http.get<any>(BACKENDURL + "aboutSecretory");
  }

  getSecretoryInfo(id){
    return this.http.get<any>(BACKENDURL_Secretory + id)
  }

  getSecretoryEmail(){
    return this.http.get<any>(BACKENDURL + "getEmails/Secretory");
  }

  addSecretory(n , dob){
    const data = {
      "fn" : n.fn,
      "mn" : n.mn,
      "ln" : n.ln,
      "age" : n.age,
      "gender" : n.gender,
      "email" : n.email,
      "mobileNo" : n.mobileNo,
      "dob" : dob,
      "add" : n.add
    }
    return this.http.post<any>(BACKENDURL + "aboutSecretory" , data);
  }

  editSecretory(n,id){
    const data = {
      "id" : id,
      "fn" : n.fn,
      "mn" : n.mn,
      "ln" : n.ln,
      "gender" : n.gender,
      "mobileNo" : n.mobileNo,
      "add" : n.add
    }
    return this.http.put<any>(BACKENDURL + "aboutSecretory" , data);
  }

  //Warden Services
  getWardensInfo(){
    return this.http.get<any>(BACKENDURL + "aboutWarden");
  }

  getWardenInfo(id){
    return this.http.get<any>(BACKENDURL_Warden + id)
  }

  getWardenEmail(){
    return this.http.get<any>(BACKENDURL + "getEmails/Warden");
  }

  addWarden(n , dob){
    const data = {
      "fn" : n.fn,
      "mn" : n.mn,
      "ln" : n.ln,
      "age" : n.age,
      "gender" : n.gender,
      "email" : n.email,
      "mobileNo" : n.mobileNo,
      "dob" : dob,
      "add" : n.add
    }

    return this.http.post<any>(BACKENDURL + "aboutWarden" , data);
  }

  editWarden(n,id){
    const data = {
      "id" : id,
      "fn" : n.fn,
      "mn" : n.mn,
      "ln" : n.ln,
      "gender" : n.gender,
      "mobileNo" : n.mobileNo,
      "add" : n.add
    }
    return this.http.put<any>(BACKENDURL + "aboutWarden" , data);
  }

  //Mess Staff Services
  getMessStaffsInfo(){
    return this.http.get<any>(BACKENDURL + "aboutMess");
  }

  getMessStaffInfo(id){
    return this.http.get<any>(BACKENDURL_Mess + id)
  }

  getMessStaffEmail(){
    return this.http.get<any>(BACKENDURL + "getEmails/Mess");
  }

  addMessStaff(n , dob){
    const data = {
      "fn" : n.fn,
      "mn" : n.mn,
      "ln" : n.ln,
      "age" : n.age,
      "gender" : n.gender,
      "email" : n.email,
      "mobileNo" : n.mobileNo,
      "dob" : dob,
      "add" : n.add
    }
    return this.http.post<any>(BACKENDURL + "aboutMess" , data);
  }

  editMessStaff(n,id){
    const data = {
      "id" : id,
      "fn" : n.fn,
      "mn" : n.mn,
      "ln" : n.ln,
      "gender" : n.gender,
      "mobileNo" : n.mobileNo,
      "add" : n.add
    }
    return this.http.put<any>(BACKENDURL + "aboutMess" , data);
  }

  //Security Services
  getSecuritiesInfo(){
    return this.http.get<any>(BACKENDURL + "aboutSecurity");
  }

  getSecurityInfo(id){
    return this.http.get<any>(BACKENDURL_Security + id)
  }

  getSecurityEmail(){
    return this.http.get<any>(BACKENDURL + "getEmails/Security");
  }

  addSecurity(n , dob){
    const data = {
      "fn" : n.fn,
      "mn" : n.mn,
      "ln" : n.ln,
      "age" : n.age,
      "gender" : n.gender,
      "email" : n.email,
      "mobileNo" : n.mobileNo,
      "dob" : dob,
      "add" : n.add
    }
    return this.http.post<any>(BACKENDURL + "aboutSecurity" , data);
  }

  editSecurity(n,id){
    const data = {
      "id" : id,
      "fn" : n.fn,
      "mn" : n.mn,
      "ln" : n.ln,
      "gender" : n.gender,
      "mobileNo" : n.mobileNo,
      "add" : n.add
    }
    return this.http.put<any>(BACKENDURL + "aboutSecurity" , data);
  }


}
