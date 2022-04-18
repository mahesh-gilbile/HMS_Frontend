import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

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
    ).subscribe((ttl:string) => {
      this.headerText = ttl;
    })
  }

}
