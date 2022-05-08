import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-secretory-side-nav',
  templateUrl: './secretory-side-nav.component.html',
  styleUrls: ['./secretory-side-nav.component.css']
})
export class SecretorySideNavComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private authService : AuthService
  ) { }

  headerText:string;

  staffBlack = "assets/Logo/Side-Nav Logo's/icons8-staff-black.png";
  staffWhite = "assets/Logo/Side-Nav Logo's/icons8-staff-white.png";
  qrBlack = "assets/Logo/Side-Nav Logo's/icons8-qr-code-black.png";
  qrWhite = "assets/Logo/Side-Nav Logo's/icons8-qr-code-white.png";
  feesLogoWhite = "assets/Logo/Side-Nav Logo's/icons8-money-white.png";
  feesLogoBlack = "assets/Logo/Side-Nav Logo's/icons8-money-black.png";
  roomLogoWhite = "assets/Logo/Side-Nav Logo's/icons8-room-white.png";
  roomLogoBlack = "assets/Logo/Side-Nav Logo's/icons8-room-black.png";
  registerLogoWhite = "assets/Logo/Side-Nav Logo's/verify-white.png"
  registerLogoBlack = "assets/Logo/Side-Nav Logo's/verify-black.png"
  stdAltBlack = "assets/Logo/Side-Nav Logo's/resource-black.png"
  stdAltWhite = "assets/Logo/Side-Nav Logo's/resource-white.png"
  logout = "assets/Logo/Side-Nav Logo's/logout-black.png";
  ngOnInit(): void {
    this.headerText = this.activatedRoute.firstChild.snapshot.data['title'];
    this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map((e) => {
        const child = this.activatedRoute.firstChild;
        if(child.snapshot.data['title']){
          return child.snapshot.data['title'];
        }
      })
    ).subscribe((ttl:string) => {
      this.headerText = ttl;
    })
  }

  onLogout(){
    this.authService.onLogout();
  }

}
