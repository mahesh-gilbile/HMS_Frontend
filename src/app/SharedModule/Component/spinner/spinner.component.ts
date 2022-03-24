import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Service/shared.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  spin = false;

  ngOnInit(): void {
    this.sharedService.setSpinner()
    .subscribe(data => {
      this.spin = data;
    })
  }

}
