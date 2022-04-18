import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { MessService } from '../mess.service';

@Component({
  selector: 'app-mess-today-history',
  templateUrl: './mess-today-history.component.html',
  styleUrls: ['./mess-today-history.component.css']
})
export class MessTodayHistoryComponent implements OnInit {

  constructor(
    private messService : MessService,
    private sharedService : SharedService
  ) { }

  todayMessHistory:any;
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.messService.getTodayMessHistory()
    .subscribe(data => {
      this.todayMessHistory = data.reverse();
      console.log(this.todayMessHistory);
      this.sharedService.visibleSpinner(false);
    })
  }

}
