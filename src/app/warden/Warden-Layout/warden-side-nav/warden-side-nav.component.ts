import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter,map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service'

@Component({
  selector: 'app-warden-side-nav',
  templateUrl: './warden-side-nav.component.html',
  styleUrls: ['./warden-side-nav.component.css']
})
export class WardenSideNavComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }
  dashboardBlack = "assets/Logo/Side-Nav Logo's/icons8-dashboard-layout-black.png";
  dashboardWhite = "assets/Logo/Side-Nav Logo's/icons8-dashboard-layout-white.png";
  allotedDutiesBlack = "assets/Logo/Side-Nav Logo's/icons8-swich-between-duties-of-same-department-role-black.png";
  allotedDutiesWhite = "assets/Logo/Side-Nav Logo's/icons8-swich-between-duties-of-same-department-role-white.png";
  hostelInfoBlack = "assets/Logo/Side-Nav Logo's/icons8-info-black.png";
  hostelInfoWhite = "assets/Logo/Side-Nav Logo's/icons8-info-white.png";
  leaveInfoBlack = "assets/Logo/Side-Nav Logo's/icons8-leave-black.png";
  leaveInfoWhite = "assets/Logo/Side-Nav Logo's/icons8-leave-white.png";
  logout = "assets/Logo/Side-Nav Logo's/logout-black.png";


  headerText:string;
  ngOnInit(): void {
    this.headerText = this.activatedRoute.firstChild.snapshot.data['title'];
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((e) => {
        const child = this.activatedRoute.firstChild;
        if(child.snapshot.data['title']){
          return child.snapshot.data['title'];
        }
      })
    ).subscribe((ttl : string) => {
      this.headerText = ttl
    })
  }

  onLogout(){
    this.authService.onLogout();
  }

}
