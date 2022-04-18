import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css']
})
export class AdminSideNavComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  dashboardBlack = "assets/Logo/Side-Nav Logo's/icons8-dashboard-layout-black.png";
  dashboardWhite = "assets/Logo/Side-Nav Logo's/icons8-dashboard-layout-white.png";
  allotedDutiesBlack = "assets/Logo/Side-Nav Logo's/icons8-swich-between-duties-of-same-department-role-black.png";
  allotedDutiesWhite = "assets/Logo/Side-Nav Logo's/icons8-swich-between-duties-of-same-department-role-white.png";
  employeeBlack = "assets/Logo/Side-Nav Logo's/staff-black.png"
  employeeWhite = "assets/Logo/Side-Nav Logo's/staff-white.png"
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
