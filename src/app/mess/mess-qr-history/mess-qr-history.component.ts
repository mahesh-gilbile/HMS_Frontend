import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { MessService } from '../mess.service';

@Component({
  selector: 'app-mess-qr-history',
  templateUrl: './mess-qr-history.component.html',
  styleUrls: ['./mess-qr-history.component.css']
})
export class MessQrHistoryComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private messService: MessService
  ) { }

  getQRHistory:any;
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.messService.getQRHistory()
    .subscribe(data => {
      this.getHistory(data);
    })
  }

  getHistory(data){
    for(let i=0 ; i<data.length ; i++){
      const date = String(data[i].Date).substring(3,5) + '/' + String(data[i].Date).substring(0,2) + '/' + String(data[i].Date).substring(6,11);
      data[i].Date = new Date(date);
    }
    for(let i=0 ; i <= data.length - 1 ; i++){
      for(let j=0 ; j < data.length - i - 1 ; j++){
        if(data[j].Date > data[j+1].Date){
          const temp = data[j];
          data[j] = data[j+1];
          data[j+1] = temp;
        }
      }
    }
    this.getQRHistory = data.reverse();
    console.log(this.getQRHistory);
    this.sharedService.visibleSpinner(false);

  }

}
