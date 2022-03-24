import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const BACKENDURL_Student = environment.apiURL + "student/";
const BACKENDURL_MESS = environment.apiURL + "mess/";

@Injectable({
  providedIn : 'root'
})
export class StudentService{
  constructor(
    private http: HttpClient
  ) {}

  // private studentInfo = new Subject<Student>();

  // getStudentInfoAPI(){
  //   const id = localStorage.getItem('studentID')
  //   this.http.get<any>(BACKENDURL + id)
  //   .pipe(map(data => {
  //     return {
  //       StudentId : data.data[0],
  //       FirstName : data.data[1],
  //       MiddleName : data.data[2],
  //       LastName : data.data[3],
  //       Gender : data.data[4],
  //       Age : data.data[5],
  //       Citizen : data.data[6],
  //       Email : data.data[7],
  //       MobileNumber : data.data[8],
  //       DOB : data.data[9],
  //       Address : data.data[10],
  //       Course : data.data[14],
  //       Branch : data.data[15],
  //       CourseDuration : data.data[16],
  //       Year : data.data[17],
  //     };
  //   }
  //   ))
  //   .subscribe((data:Student) => {
  //     this.studentInfo.next(data);
  //   })
  // }


  getStudentId(){
    return localStorage.getItem('studentID');
  }

  getStudentInfo(){
    const id = this.getStudentId();
    return this.http.get<any>(BACKENDURL_Student + id);
  }

  getGuardianInfo(){
    const id = this.getStudentId();
    return this.http.get<any>(BACKENDURL_Student + 'guardian_details/' + id);
  }

  changePassword(n:any){
    const id = this.getStudentId();
    const data = {
      'currentPassword' : n.currentPassword,
      'newPassword' : n.newPassword,
      'reEnterNewPassword' : n.reEnterNewPassword
    }
    return this.http.post<any>(BACKENDURL_Student + 'change_pass/' + id , data);
  }

  getMessMenu(){
    const id = this.getStudentId();
    return this.http.get<any>(BACKENDURL_MESS + 'mess_menu/' + id);
  }

  getTodaysMenu(){
    const id = this.getStudentId();
    return this.http.get<any>(BACKENDURL_MESS + 'specificDay_menu/' + id);
  }

  getRoomDetails(){
    const id = this.getStudentId();
    return this.http.get<any>(BACKENDURL_Student + 'getRoomDetails/' + id);
  }

  scanQRForMess(data){
    const id = this.getStudentId();
    return this.http.post<any>(BACKENDURL_Student + 'scanMess/' + id , data);
  }
}
