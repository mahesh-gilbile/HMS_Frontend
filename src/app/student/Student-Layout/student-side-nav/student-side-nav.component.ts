import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-student-side-nav',
  templateUrl: './student-side-nav.component.html',
  styleUrls: ['./student-side-nav.component.css']
})
export class StudentSideNavComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private authService: AuthService
  ) { }

  public getScreenWidth:any;
  public getScreenHeight:any;
  public mobile:any;

  //Url of Images
  dashboardLogoWhite = "assets/Logo/Side-Nav Logo's/icons8-dashboard-layout-white.png";
  dashboardLogoBlack = "assets/Logo/Side-Nav Logo's/icons8-dashboard-layout-black.png";
  guardianLogoWhite = "assets/Logo/Side-Nav Logo's/icons8-adoption-white.png";
  guardianLogoBlack = "assets/Logo/Side-Nav Logo's/icons8-adoption-black.png";
  messLogoWhite = "assets/Logo/Side-Nav Logo's/icons8-meal-white.png";
  messLogoBlack = "assets/Logo/Side-Nav Logo's/icons8-meal-black.png";
  roomLogoWhite = "assets/Logo/Side-Nav Logo's/icons8-room-white.png";
  roomLogoBlack = "assets/Logo/Side-Nav Logo's/icons8-room-black.png";
  feesLogoWhite = "assets/Logo/Side-Nav Logo's/icons8-money-white.png";
  feesLogoBlack = "assets/Logo/Side-Nav Logo's/icons8-money-black.png";
  logoutLogo = "assets/Logo/Side-Nav Logo's/logout-black.png";
  Qr_Scan = "assets/Logo/Side-Nav Logo's/QR_Scan.png";

  headerText:string;
  ngOnInit(): void {
    this.onWindowResize();
    this.headerText = this.activatedRoute.firstChild.snapshot.data['title'];
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
        })
      ).subscribe((ttl: string) => {
        this.headerText = ttl;
      });
  }

  onLogout(){
    this.authService.onLogout();
  }

  @HostListener('window:resize',['$event'])
  onWindowResize(){
    this.getScreenWidth = window.innerWidth;
    this.setResponsive(this.getScreenWidth);
  }

  setResponsive(n){
    if(n >= 480){
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

}
