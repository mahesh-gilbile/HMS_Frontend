import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { SecretoryService } from '../../secretory.service';

@Component({
  selector: 'app-secretory-std-register-list',
  templateUrl: './secretory-std-register-list.component.html',
  styleUrls: ['./secretory-std-register-list.component.css']
})
export class SecretoryStdRegisterListComponent implements OnInit {

  constructor(
    private secretoryService: SecretoryService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  stdList : any;
  ngOnInit(): void {
    this.secretoryService.getRegisterStdList()
    .subscribe(data => {
      this.stdList = data;
    })
  }

  onRoute(id){
    this.router.navigate(['../../secretory/stdRegisterApprove' , id]);
  }


}
