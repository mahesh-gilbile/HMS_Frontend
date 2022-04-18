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


}