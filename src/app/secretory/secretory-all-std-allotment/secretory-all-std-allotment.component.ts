import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../secretory.service';

@Component({
  selector: 'app-secretory-all-std-allotment',
  templateUrl: './secretory-all-std-allotment.component.html',
  styleUrls: ['./secretory-all-std-allotment.component.css']
})
export class SecretoryAllStdAllotmentComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private secretoryService: SecretoryService,
  ) { }

  notAltStdList : any[] = null;
  startAlt = false;
  altStdList : any [] = null;
  
  ngOnInit(): void {
    this.loadNotAltStd();
  }

  loadNotAltStd(){
    this.sharedService.visibleSpinner(true);
    this.secretoryService.getNotAltStd()
    .subscribe(data => {
      // console.log(data);
      this.notAltStdList = data;
      this.sharedService.visibleSpinner(false);
    })
  }

  startAltChange(){
    this.startAlt = !this.startAlt;
  }

  altAllStd(){
    this.sharedService.visibleSpinner(true);
    this.notAltStdList = null;
    let data1 = null;
    this.secretoryService.altAllStd()
      .subscribe(data => {
        // console.log(data);
        data1 = data;
      })
    setTimeout(() => {
      this.altStdList = data1;
      this.sharedService.visibleSpinner(false);
    },this.getRandomNumberBetween(3000 , 9999));
  }

getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

}
