import { NgModule } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports : [
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})

export class AppMaterialModule { }
