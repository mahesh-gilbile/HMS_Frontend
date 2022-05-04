import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { WardenService } from '../../warden.service';

@Component({
  selector: 'app-warden-student-gate-entry',
  templateUrl: './warden-student-gate-entry.component.html',
  styleUrls: ['./warden-student-gate-entry.component.css']
})
export class WardenStudentGateEntryComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private wardenService : WardenService,
    private sharedService : SharedService,
    private router : Router
  ) { }

  stdID:any;
  gateHistory:any;
  name:any;
  ngOnInit(): void {
    this.sharedService.visibleSpinner(true);
    this.stdID = this.route.snapshot.paramMap.get('id');
    this.wardenService.getGateHistory(this.stdID)
    .subscribe(data => {
      const gateInfo = data.GateInfo;
      this.name = data.StudentName;
      this.gateHistory = gateInfo.reverse();
      this.sharedService.visibleSpinner(false);
    })
  }

}
