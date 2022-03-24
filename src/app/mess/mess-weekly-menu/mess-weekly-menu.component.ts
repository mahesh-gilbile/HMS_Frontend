import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { MessService } from '../mess.service';
import { MessMenuEditComponent } from './mess-menu-edit/mess-menu-edit.component';

@Component({
  selector: 'app-mess-weekly-menu',
  templateUrl: './mess-weekly-menu.component.html',
  styleUrls: ['./mess-weekly-menu.component.css']
})
export class MessWeeklyMenuComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private messService : MessService,
    public dialog: MatDialog,
    private sharedService: SharedService
  ) { }

  Type : any;
  mess_menu : any = [];
  todayDay : any;
  days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    this.sharedService.visibleSpinner(true);
    this.Type = null;
    this.mess_menu = [];
    this.Type = this.route.snapshot.paramMap.get('type');
    this.messService.getMenuByType(this.Type)
    .subscribe(data => {
      for(let d of this.days){
        for(let d1 of data.Mess_Menu){
          if(d === d1.Day){
            this.mess_menu.push(d1);
          }
        }
      }

    this.getDayStatus();
    })
  }

  getDayStatus(){
    this.messService.getTodayDayStartStatus()
    .subscribe(result => {
      if(result){
        const d = new Date();
        this.todayDay = this.days[d.getDay()];
      }
      this.sharedService.visibleSpinner(false);
    },error => {
      console.log(error);
      this.sharedService.visibleSpinner(false);
    })
  }

  onEdit(n){
    const dialogRef = this.dialog.open(MessMenuEditComponent , { data: {n}})

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      this.getMenu();
    })
  }

}
