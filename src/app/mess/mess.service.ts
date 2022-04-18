import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const BACKENDURL = environment.apiURL + "mess/";

@Injectable({
  providedIn : 'root'
})

export class MessService {
  constructor(
    private http:HttpClient
  ){}


  getMessStaffID(){
    return localStorage.getItem('messID');
  }

  getMessStaffInfo(){
    const id = this.getMessStaffID();
    return this.http.get<any>(BACKENDURL + id);
  }

  changePassword(n:any){
    const id = this.getMessStaffID();
    const data = {
      'currentPassword' : n.currentPassword,
      'newPassword' : n.newPassword,
      'reEnterNewPassword' : n.reEnterNewPassword
    }
    return this.http.post<any>(BACKENDURL + 'change_pass/' + id , data);
  }

  getMenuByType(type){
    const id = this.getMessStaffID();
    return this.http.get<any>(BACKENDURL + 'specificType_menu/' + id  + '/' + type)
  }

  getSingleMenu(n){
    return this.http.get<any>(BACKENDURL + 'singleMenu/' + n);
  }

  updateMenu(n:any){
    const data = {
      Food_Menu : n.menu,
      Food_Description : n.description
    }
    return this.http.put<any>(BACKENDURL + 'singleMenu/' + n.id , data);
  }

  getTodayDayStartStatus(){
    const id = this.getMessStaffID();
    return this.http.get<any>(BACKENDURL + 'CheckDayStarted/' + id);
  }

  startYourDay(){
    const id = this.getMessStaffID();
    return this.http.get<any>(BACKENDURL + 'startDay/' + id);
  }

  generateQRCode(){
    const id = this.getMessStaffID();
    return this.http.get<any>(BACKENDURL + 'GenerateQRForMess/' + id);
  }

  applyForLeaves(n:any){
    const id = this.getMessStaffID();
    const data = {
        "from" : n.from,
        "to" : n.to,
        "days" : n.days,
        "reason" : n.reason
    }
    return this.http.post<any>(BACKENDURL + 'leaves/' + id , data)
  }

  historyLeaves(){
    const id = this.getMessStaffID();
    return this.http.get<any>(BACKENDURL + 'leaves/' + id);
  }

  getTodayMessHistory(){
    const id = this.getMessStaffID();
    return this.http.get<any>(BACKENDURL + 'getTodayMessHistory/' + id);
  }

  getQRHistory(){
    const id = this.getMessStaffID();
    return this.http.get<any>(BACKENDURL + 'getQRHistory/' + id);
  }


}
