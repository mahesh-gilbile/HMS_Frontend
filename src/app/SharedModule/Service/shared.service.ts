import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn : 'root'
})

export class SharedService{

  private spin = new Subject<any>();
  spinner = false;

  constructor(
  ){}

  getMonth(id){
    switch(id){
      case '01' || '1':
        return 'JANUARY';
        break;
      case '02' || '2':
        return 'FEBRUARY';
        break;
      case '03' || '3':
        return 'MARCH';
        break;
      case '04' || '4':
        return 'APRIL';
        break;
      case '05' || '5':
        return 'MAY';
        break;
      case '06' || '6':
        return 'JUNE';
        break;
      case '07' || '7':
        return 'JULY';
        break;
      case '08' || '8':
        return 'AUGUST';
        break;
      case '09' || '9':
        return 'SEPTEMBER';
        break;
      case '10':
        return 'OCTOBER';
        break;
      case '11':
        return 'NOVEMBER';
        break;
      case '12':
        return 'DECEMBER';
        break;
    }
  }

  visibleSpinner(s){
    this.spinner = s;
    this.spin.next(this.spinner)
  }

  setSpinner(){
    return this.spin.asObservable();
  }


}
