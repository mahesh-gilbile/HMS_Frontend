import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HostelMS';

  route = 0;

  timepass = null;

  changeroute(n){
    this.route = n;
  }

  changePage(m){
    this.timepass = m;
  }
}
