import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QRCodeModule } from "angular2-qrcode";
import { AppMaterialModule } from "../app-material.module";
import { AppRoutingModule } from "../app-routing.module";
import { SecurityComponent } from "./security.component";
import { SecurityHeaderComponent } from './Security-Layout/security-header/security-header.component';
import { SecuritySideNavComponent } from './Security-Layout/security-side-nav/security-side-nav.component';
import { SecurityDashbaordComponent } from './security-dashbaord/security-dashbaord.component';
import { SecurityQRComponent } from './security-qr/security-qr.component';
import { SecurityChangePasswordComponent } from './security-change-password/security-change-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SecurityComponent,
    SecurityHeaderComponent,
    SecuritySideNavComponent,
    SecurityDashbaordComponent,
    SecurityQRComponent,
    SecurityChangePasswordComponent
  ],
  imports:[
    CommonModule,
    QRCodeModule,
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SecurityModule { }
