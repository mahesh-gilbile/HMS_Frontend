import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const BACKENDURL = environment.apiURL + "secretory/";

@Injectable({
    providedIn : 'root'
})

export class SecretoryService{
    constructor(
        private http : HttpClient
    ) {}

    getSecretoryID(){
        return localStorage.getItem('secretoryID');
    }

    getSecretoryInfo(){
        const id = this.getSecretoryID();
        return this.http.get<any>(BACKENDURL + id);
    }

    changePassword(n:any){
        const id = this.getSecretoryID();
        const data = {
          'currentPassword' : n.currentPassword,
          'newPassword' : n.newPassword,
          'reEnterNewPassword' : n.reEnterNewPassword
        }
        return this.http.post<any>(BACKENDURL + 'change_pass/' + id , data);
    }

    applyForLeaves(n:any){
        const id = this.getSecretoryID();
        const data = {
            "from" : n.from,
            "to" : n.to,
            "days" : n.days,
            "reason" : n.reason
        }
        return this.http.post<any>(BACKENDURL + 'leaves/' + id , data)
    }

    historyLeaves(){
        const id = this.getSecretoryID();
        return this.http.get<any>(BACKENDURL + 'leaves/' + id);
    }

    getStudentList(){
        return this.http.get<any>(BACKENDURL + 'getStdList');
    }

    getStudentFeesInfo(id){
        return this.http.get<any>(BACKENDURL + 'StdFees/' + id);
    }

    payment(d , stdId){
        const data = {
            'StudentID' : stdId,
            'Amount' : d.Amount,
            'PaymentMethod' : d.paymentmethod
        }
        const id = this.getSecretoryID();
        return this.http.post<any>(BACKENDURL + 'payFees/' + id , data);
    }

    getRegisterStdList(){
        return this.http.get<any>(BACKENDURL + 'getRegistredStudent');
    }

    getSingleRegisterStdInfo(id){
        return this.http.get<any>(BACKENDURL + 'getRegistredStudent/' + id);
    }

    approveAdmission(id , d){
        const data = {
            "Status" : "True",
            "StdID" : id,
            "Amount" : d.Amount,
            "Year" : d.Year,
            "JoinDate" : d.JoinDate,
            "EndDate" : d.EndDate
        }
        return this.http.post<any>(BACKENDURL + 'approve' , data);
    }

    getRoomList(){
        return this.http.get<any>(BACKENDURL + 'getRoomList');
    }

    getHostelList(){
        return this.http.get<any>(BACKENDURL + 'getHostelList');
    }

    getWingList(){
        return this.http.get<any>(BACKENDURL + 'getWingList');
    }

    addRoom(data){
        return this.http.post<any>(BACKENDURL + 'addRoom' , data);
    }

    getAltInfo(id){
        return this.http.get<any>(BACKENDURL + 'roomDetailsForAlt/' + id);
    }
}