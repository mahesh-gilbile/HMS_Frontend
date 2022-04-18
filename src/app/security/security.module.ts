import { CommonModule, DatePipe } from "@angular/common";
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
import { SecurityApplyLeaveComponent } from './security-apply-leave/security-apply-leave.component';
import { SecurityQrHistoryComponent } from './security-qr-history/security-qr-history.component';

@NgModule({
  declarations: [
    SecurityComponent,
    SecurityHeaderComponent,
    SecuritySideNavComponent,
    SecurityDashbaordComponent,
    SecurityQRComponent,
    SecurityChangePasswordComponent,
    SecurityApplyLeaveComponent,
    SecurityQrHistoryComponent
  ],
  imports:[
    CommonModule,
    QRCodeModule,
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    DatePipe
  ]
})

export class SecurityModule { }
